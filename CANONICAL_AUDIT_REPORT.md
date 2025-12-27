# Canonical + Redirect Audit Report
**Site:** https://www.tarampados.gr  
**Migration:** Wix → Next.js/Vercel  
**Audit Date:** December 26, 2025

---

## 🚨 CRITICAL FINDINGS

### 1. **Global Canonical Conflict** (SEVERITY: CRITICAL)
**Issue:** ALL pages point their canonical to the homepage (`https://www.tarampados.gr`)

**Affected URLs:**
- ✅ `/` → `https://www.tarampados.gr` (CORRECT)
- ❌ `/en/culture` → `https://www.tarampados.gr` (WRONG - should be `/en/culture`)
- ❌ `/fr/actualites` → `https://www.tarampados.gr` (WRONG - should be `/fr/actualites`)
- ❌ `/nea` → `https://www.tarampados.gr` (WRONG - should be `/nea`)
- ❌ `/nea/electricity-pilon-removal` → `https://www.tarampados.gr` (WRONG)

**Root Cause:**  
`src/app/layout.tsx` sets a global canonical of `"/"` which is inherited by all child pages. Individual page metadata doesn't override this.

**SEO Impact:**
- 🔴 **Google will deindex all non-homepage pages**
- 🔴 **All page authority consolidates to homepage**
- 🔴 **Blog posts won't rank independently**
- 🔴 **Multilingual pages will have indexing conflicts**

---

### 2. **Non-WWW Redirect Uses 307 Instead of 301**
**Issue:** `tarampados.gr` → `www.tarampados.gr` uses temporary redirect (307)

**Current Behavior:**
```bash
$ curl -sI https://tarampados.gr/
HTTP/2 307
location: https://www.tarampados.gr/
```

**Expected:** HTTP 301 (Permanent Redirect)

**Impact:** Search engines may not fully consolidate authority to `www` version.

---

### 3. **Missing Page-Specific Hreflang Tags**
**Issue:** While homepage has proper hreflang tags, individual pages inherit the homepage's hreflang structure.

**Example Problem:**
- `/politismos` (Greek culture page) has hreflang pointing to `/`, `/en`, `/fr` instead of `/politismos`, `/en/culture`, `/fr/culture`

**Impact:** International SEO signals are incorrect for non-homepage pages.

---

### 4. **Legacy Wix URLs Returning 404**
**Status:** ✅ **PARTIALLY FIXED** (redirects configured in `next.config.ts`)

**Redirects Implemented:**
- `/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82` → `/politismos` (301)
- `/fr/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82` → `/fr/culture` (301)
- `/en/επικοινωνία` → `/en/contact` (301)
- `/πολιτική-cookies` → `/politiki-aporritou` (301)
- `/πολιτική-χρήσης` → `/politiki-chrisis` (301)
- `/fr/πολιτική-cookies` → `/fr/politique-de-confidentialite` (301)
- `/fr/το-χωριό-μας` → `/fr` (301)

**Remaining Risk:** Google may still have other legacy URLs indexed. Monitor Google Search Console for additional 404s.

---

## 📊 MULTILINGUAL ANALYSIS

### Current Structure: ✅ GOOD
```
Greek (default): /           → /politismos → /nea
English:         /en         → /en/culture → /en/news
French:          /fr         → /fr/culture → /fr/actualites
```

### Hreflang Implementation: ⚠️ NEEDS FIX
- ✅ Homepage: Correct hreflang tags
- ❌ All other pages: Incorrect (inherit homepage hreflang)

---

## 🔧 REQUIRED FIXES

### FIX 1: Implement Per-Page Canonical URLs (CRITICAL - Priority 1)

**Create canonical utility:** `/src/lib/canonical.ts`
```typescript
import { siteMetadata } from "./site-metadata";
import type { Locale } from "@/i18n/config";

export function getCanonicalUrl(pathname: string): string {
  const baseUrl = siteMetadata.siteUrl;
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${baseUrl}${normalizedPath}`;
}

export function getAlternates(paths: Record<Locale, string>) {
  const baseUrl = siteMetadata.siteUrl;
  return {
    languages: {
      el: `${baseUrl}${paths.el}`,
      en: `${baseUrl}${paths.en}`,
      fr: `${baseUrl}${paths.fr}`,
    },
  };
}
```

**Update pages to use canonical:**

**Example: `/src/app/nea/page.tsx`**
```typescript
import { getCanonicalUrl, getAlternates } from "@/lib/canonical";

export const metadata: Metadata = {
  title: "Νέα | Tarampados Village",
  description: "...",
  alternates: {
    canonical: getCanonicalUrl("/nea"),
    ...getAlternates({
      el: "/nea",
      en: "/en/news",
      fr: "/fr/actualites",
    }),
  },
};
```

**Example: `/src/app/nea/[slug]/page.tsx`**
```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getNewsArticle("el", slug);
    return {
      title: `${article.title} | Tarampados Village`,
      description: article.summary,
      alternates: {
        canonical: getCanonicalUrl(`/nea/${slug}`),
        ...getAlternates({
          el: `/nea/${slug}`,
          en: `/en/news/${slug}`,
          fr: `/fr/actualites/${slug}`,
        }),
      },
    };
  } catch {
    return { title: "Νέα | Tarampados Village" };
  }
}
```

**Pages to Update:**
- ✅ Root layout (already has correct canonical)
- ❌ `/src/app/page.tsx` (homepage - OK as-is, but add explicit canonical)
- ❌ `/src/app/nea/page.tsx`
- ❌ `/src/app/nea/[slug]/page.tsx`
- ❌ `/src/app/politismos/page.tsx`
- ❌ `/src/app/istoria/page.tsx`
- ❌ `/src/app/thriskeia/page.tsx`
- ❌ `/src/app/epikoinonia/page.tsx`
- ❌ `/src/app/politiki-aporritou/page.tsx`
- ❌ `/src/app/politiki-chrisis/page.tsx`
- ❌ All `/en/*` pages (9 pages)
- ❌ All `/fr/*` pages (9 pages)

**Total:** ~30 page files need updates

---

### FIX 2: Change Non-WWW Redirect to 301 (Priority 2)

**Option A: Vercel Configuration (Recommended)**

Create/update `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "tarampados.gr"
        }
      ],
      "destination": "https://www.tarampados.gr/:path*",
      "permanent": true
    }
  ]
}
```

**Option B: Next.js Middleware**

Create `src/middleware.ts`:
```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  
  if (host === "tarampados.gr") {
    return NextResponse.redirect(
      `https://www.tarampados.gr${request.nextUrl.pathname}${request.nextUrl.search}`,
      { status: 301 }
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
```

---

### FIX 3: Update Root Layout Canonical (Priority 1)

**File:** `/src/app/layout.tsx`

**Change:**
```diff
export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  // ... other metadata
  alternates: {
-   canonical: "/",
+   // Let child pages set their own canonical
    languages: {
      el: "/",
      en: "/en",
      fr: "/fr",
    },
  },
};
```

---

## ✅ VERIFICATION STEPS

### Step 1: Test Canonical Tags Locally
```bash
# Start dev server
npm run dev

# Check homepage canonical
curl -s http://localhost:3000/ | grep -o '<link rel="canonical"[^>]*>'

# Check news page canonical
curl -s http://localhost:3000/nea | grep -o '<link rel="canonical"[^>]*>'

# Check news article canonical
curl -s http://localhost:3000/nea/electricity-pilon-removal | grep -o '<link rel="canonical"[^>]*>'

# Check English page canonical
curl -s http://localhost:3000/en/culture | grep -o '<link rel="canonical"[^>]*>'
```

**Expected Results:**
- `/` → `<link rel="canonical" href="https://www.tarampados.gr"/>`
- `/nea` → `<link rel="canonical" href="https://www.tarampados.gr/nea"/>`
- `/nea/electricity-pilon-removal` → `<link rel="canonical" href="https://www.tarampados.gr/nea/electricity-pilon-removal"/>`
- `/en/culture` → `<link rel="canonical" href="https://www.tarampados.gr/en/culture"/>`

---

### Step 2: Test Hreflang Tags
```bash
curl -s http://localhost:3000/nea | grep -o '<link rel="alternate"[^>]*>' | head -5
```

**Expected:** Should show alternates for `/nea`, `/en/news`, `/fr/actualites`

---

### Step 3: Verify Redirects
```bash
# Test legacy Greek URL
curl -sI http://localhost:3000/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82 | grep -i "location\|http/"

# Test non-www redirect (after Fix 2)
curl -sI https://tarampados.gr/ | grep -i "location\|http/"
```

---

### Step 4: Post-Deployment Checks

**After deploying fixes to production:**

1. **Google Search Console:**
   - Check "Coverage" report for indexing issues
   - Monitor "URL Inspection" tool for canonical resolution
   - Watch for any new 404 errors from legacy URLs

2. **Screaming Frog SEO Spider:**
   - Crawl entire site
   - Filter by "Canonical" column
   - Verify all pages have self-referencing canonicals

3. **Manual Spot Checks:**
   ```bash
   # Homepage
   curl -s https://www.tarampados.gr/ | grep canonical
   
   # Greek news
   curl -s https://www.tarampados.gr/nea | grep canonical
   
   # English culture
   curl -s https://www.tarampados.gr/en/culture | grep canonical
   
   # French news
   curl -s https://www.tarampados.gr/fr/actualites | grep canonical
   
   # News article
   curl -s https://www.tarampados.gr/nea/electricity-pilon-removal | grep canonical
   ```

4. **Submit Updated Sitemap:**
   - Generate sitemap with all canonical URLs
   - Submit to Google Search Console
   - Submit to Bing Webmaster Tools

---

## 🎯 PRIORITY MATRIX

| Priority | Fix | Impact | Effort | Timeline |
|----------|-----|--------|--------|----------|
| **P0** | Remove global canonical from layout | Critical | Low | Immediate |
| **P0** | Add canonical to all 30 page files | Critical | Medium | 1-2 hours |
| **P1** | Add hreflang to all pages | High | Medium | 1-2 hours |
| **P2** | Fix non-www redirect (307→301) | Medium | Low | 15 minutes |
| **P3** | Monitor GSC for legacy URLs | Low | Low | Ongoing |

---

## 📈 EXPECTED OUTCOMES

**After implementing all fixes:**

1. ✅ Each page has its own unique canonical URL
2. ✅ Multilingual pages have correct hreflang alternates
3. ✅ Legacy Wix URLs redirect with 301 status
4. ✅ Non-www domain redirects with 301 status
5. ✅ Google can properly index all pages independently
6. ✅ International SEO signals are correct
7. ✅ Page authority is preserved per page (not consolidated to homepage)

**Timeline to see results:**
- **Technical fixes:** Immediate (after deployment)
- **Google re-indexing:** 1-4 weeks
- **SEO improvements:** 4-12 weeks

---

## 🔗 RELATED FILES

- `/src/lib/canonical.ts` (NEW - canonical utility)
- `/src/app/layout.tsx` (UPDATE - remove global canonical)
- `/src/app/*/page.tsx` (UPDATE - add canonical to all ~30 pages)
- `/next.config.ts` (EXISTING - redirects already configured)
- `/vercel.json` (OPTIONAL - for non-www redirect)

---

## 📝 IMPLEMENTATION CHECKLIST

- [ ] Create `/src/lib/canonical.ts` utility
- [ ] Update root `/src/app/layout.tsx` (remove global canonical)
- [ ] Update homepage `/src/app/page.tsx` + `/en/page.tsx` + `/fr/page.tsx`
- [ ] Update news index pages (3 files)
- [ ] Update news article pages (3 files)
- [ ] Update static pages (culture, history, religion, contact) (12 files)
- [ ] Update policy pages (6 files)
- [ ] Add non-www → www redirect (vercel.json or middleware)
- [ ] Deploy to production
- [ ] Verify canonical tags on live site (all pages)
- [ ] Verify hreflang tags on live site (spot check)
- [ ] Verify redirects (legacy + non-www)
- [ ] Monitor Google Search Console for 1 week
- [ ] Submit updated sitemap to GSC
- [ ] Re-audit in 2 weeks

---

**End of Report**


