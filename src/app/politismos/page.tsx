import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Πολιτισμός | Tarampados Village",
  description:
    "Πολιτιστικές δράσεις, εργαστήρια και έθιμα του Ταραμπάδου με επίκεντρο τους περιστεριώνες και τη σύγχρονη δημιουργία.",
};

const pigeonHouseImages = Array.from(
  { length: 6 },
  (_, index) => `/images/pidgeon_houses/h_${index + 1}.avif`
);

export default function CulturePage() {
  return (
    <PageShell
      title="Πολιτισμός"
      heroImage="/images/hero/culture.webp"
      heroFit="cover"
      introduction={[
        "Στην κοιλάδα του Ταραμπάδου και στα πλατώματα δεξιά και αριστερά της υπάρχουν οι περισσότεροι και μερικοί από τους παλιότερους και καλύτερα διακοσμημένους περιστεριώνες στο νησί.",
        
      ]}
      sections={[
        {
          heading: "Περιστεριώνες",
          paragraphs: [
            "Προερχόμενοι ως τύπος κτηρίων από την περιοχή της Απουλίας στη νοτιοανατολική Ιταλία, αποτελούν αληθινό πολιτιστικό μνημείο και θησαυρό, όπως και ολόκληρη η περιοχή.",
            "Κατά την Ενετοκρατία, σύμφωνα με τον τότε ισχύοντα νόμο, η ιδιοκτησία περιστεριώνων ήταν αποκλειστικό προνόμιο των 69 φεουδαρχών του νησιού, επομένως οι ντόπιοι δεν είχαν αυτό το δικαίωμα.",
            "Δεν γνωρίζουμε από πηγές αν η περιστεροτροφία προϋπήρχε της Ενετοκρατίας στο νησί. Τα περιστέρια όμως, εκτός από το κρέας των πιτσουνιών τους, λιπαίνουν και το έδαφος με τα περιττώματά τους, που θεωρούνται πρώτης τάξης λίπασμα, γι’ αυτό και οι ντόπιοι, μετά την απελευθέρωση, συνέχισαν την εκτροφή τους.",
            "Οι ίδιοι οι περιστερεώνες, φτιαγμένοι από ντόπιο σχιστόλιθο, αποτελούνται από δύο ορόφους. Στον κάτω φυλάσσονται γεωργικά εργαλεία και ζωοτροφές ή λιπάσματα, στον επάνω ζουν τα περιστέρια.",
            <div
              key="gallery"
              className="mt-8 grid gap-4 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
                Πινακοθήκη περιστεριώνων
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pigeonHouseImages.map((src, index) => (
                  <figure
                    key={src}
                    className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={src}
                        alt={`Περιστεριώνας ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority={index < 2}
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>,
          ],
        },
      ]}
      locale="el"
    />
  );
}

