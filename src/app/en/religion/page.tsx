import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroReligion from "@public/images/hero/religion.webp";
import saintMichaelImage from "@public/images/pages/religion/saint_michael.avif";
import saintCharalambosImage from "@public/images/pages/religion/saint_charalambos.avif";
import virginMaryImage from "@public/images/pages/religion/virgin_mary_of_vrysi.avif";

export const metadata: Metadata = {
  title: "Religion | Tarampados Village",
  description:
    "Stories about the chapels, feasts and volunteer groups that shape the spiritual life of Tarampados.",
};

export default function ReligionEn() {
  return (
    <PageShell
      title="Religion"
      heroImage={heroReligion}
      heroFit="cover"
      introduction={[
        "Here you will find original text that preserves the histories, feast days, miracles, and rituals as they are passed down by the people of Tarampados.",
      ]}
      sections={[
        {
          heading: "Church of St. Michael",
          paragraphs: [
            <div
              key="saint-michael-block"
              className="flex flex-col gap-6 lg:flex-row lg:items-start"
            >
              <div className="space-y-3 text-lg leading-8 text-stone-700">
                <p>
                  The Catholic Church of St. Michael in Tarampados is one of the 30 parishes of the Catholic Archdiocese of Naxos – Tinos – Andros – Mykonos.
                  There is no definitive record for the construction of the very first church at this site.
                </p>
                <p>
                  The present church dates to 1810, while the parish itself was founded in 1789. During a recent restoration of the altar vessels, a chalice
                  engraved with the year 1532 was discovered.
                </p>
                <p>
                  Every 29 September the community celebrates St. Michael with a festive Mass, preceded by a solemn vespers the evening before.
                </p>
              </div>
              <figure className="w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src={saintMichaelImage}
                    alt="Interior details of the Church of St. Michael in Tarampados"
                    fill
                    className="object-contain bg-stone-950"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-stone-600">
                  Details from St. Michael’s, the parish that gathers the village every September.
                </figcaption>
              </figure>
            </div>,
          ],
        },
        {
          heading: "Church of St. Charalambos",
          paragraphs: [
            <div
              key="saint-charalambos-block"
              className="flex flex-col gap-6 lg:flex-row lg:items-start"
            >
              <div className="space-y-3 text-lg leading-8 text-stone-700">
                <p>
                  St. Charalambos is first recorded in the 1828 census as a chapel belonging to the nearby village of Kampos, mainly serving the Orthodox
                  families who once worshipped at St. Catherine.
                </p>
                <p>
                  That census lists the chapel as the property of a local named Finale, who also owned the chapel of St. John at “Floroporia”. A marble lintel
                  above the bell tower bears an inscription proving that the church predates the documented renovations and that steady donations of icons,
                  furniture, and liturgical items followed.
                </p>
                <p>
                  The dedication to St. Charalambos symbolised protection for the area. By the late 19th century the church remained a point of pride for the
                  Orthodox of Falatados, Hatzirados, Ktikados, and Tripotamos.
                </p>
              </div>
              <figure className="w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src={saintCharalambosImage}
                    alt="Exterior of St. Charalambos Church in Tarampados"
                    fill
                    className="object-contain bg-stone-950"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-stone-600">
                  St. Charalambos, the chapel that became a landmark for surrounding Orthodox villages.
                </figcaption>
              </figure>
            </div>,
          ],
        },
        {
          heading: "Virgin Mary of Vrysi",
          paragraphs: [
            <figure
              key="vrysi-photo"
              className="mb-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={virginMaryImage}
                  alt="Pilgrims gathered at the Virgin Mary of Vrysi sanctuary"
                  fill
                  className="object-contain bg-stone-950"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-stone-600">
                The Vrysi pilgrimage, a Marian sanctuary for the wider Cycladic community.
              </figcaption>
            </figure>,
            "The Virgin Mary of Vrysi is the Theometric Pilgrimage of the Ecclesiastical Province of Naxos-Tinos-Andros-Mykonos.",
            "Following the road to Exomeria, we reach the crossroads of Agia Marina, and taking the road leading to Agios Romanos, we meet the Pilgrimage of Vrysiotissa.",
            "",
            "There are several possible versions of the name of Vrysi:",
            "",
            "• From the natural spring of water that exists there.",
            "• The “Virgin of the Fountain”, because the icon was found near the spring.",
            "• “Bressi” from the word “finding”.",
            "• “Our Lady, Fountain of Grace”, as a spiritual explanation.",
            "",
            "In the village of Tarambados, there lived a nun of the Third Order of St. Francis. In a dream, the Virgin Mary appeared to her and pointed out to her the location where her icon was buried.",
            "",
            "The discovery of the icon took place in the 17th century, in 1600-1619.",
            "",
            "Scientific research shows that the icon was painted in the late 14th to early 15th century. After 1830 the icon of the Virgin Mary was taken to Constantinople to be silvered.",
            "",
            "It was the wish of a woman from Aetofolia who was miraculously healed, who sold one of her estates and offered the money for this purpose.",
            "",
            "There is another version that while the icon was in town a woman who was healed silvered the icon and then sent a copy of it to Tinos, keeping the original at home. When the Tinian people of Polis were informed of the incident, they acted to return it to Tinos.",
            "",
            "On 3 September 1936 she returned to Athens. On August 1, 1937 the icon arrived in Xinara of Tinos and the next day, August 2, with a procession to Vrisi.",
            "",
            "The Virgin of the Candles, as it was called, is the first church built around 1642. Parts of frescoes testify to its antiquity. It was enlarged three times, as the variations in height of its interior testify.",
            "",
            "This chapel was dedicated to Pope John 23rd Macarius on 13 August 2004. On 27 April 2014, Pope Francis proclaimed Pope John 23rd and Pope John Paul 2nd Saints, the day on which this Chapel was dedicated to these Holy Popes. In it are the confessionals where every believer goes to receive absolution.",
            "",
            <span
              className="font-semibold underline"
              key="transfiguration-heading"
            >
              The church of the Transfiguration
            </span>,
            "",
            "The Church of the Transfiguration was built at the end of the 18th century (1880). On August 15, 1937, His Eminence Angelos Joseph Roncalli, later Pope John 23rd, visited Vrisi, where he celebrated his first High Priestly Mass. He attended his first Holy Mass in Greece. On May 3, 1938 he offers his silver chalice. In commemoration of this visit, a marble plaque was placed inside the Church of the Transfiguration where the figure of the unforgettable Pope John 23rd dominates and where excerpts from his letter are engraved.",
            "",
            <span
              className="font-semibold underline"
              key="find-heading"
            >
              The sanctuary of the find
            </span>,
            "",
            "The Church of the Annunciation was consecrated on August 2, 1937, built on the site where the icon of the Virgin Mary was found. Two marble inscriptions, one in Greek and the other in Latin, refer to the date of the discovery.",
            "",
            "Next to the Church of the Euresis is the Communion Hall, a place of reception for pilgrims, built in 1937.",
            "",
            "The pilgrimage is celebrated on 15 August. From the 1st to the 13th of August, the Prayer in honour of the Virgin Mary is celebrated daily. On August 14, the eve of the feast day, there is an Archpriestly Vespers, a prayer vigil and the midnight Archpriestly Divine Liturgy.",
            "",
            "On the day of the feast day, Divine Liturgies are celebrated in the morning hours to serve the many pilgrims, as well as the High Priestly Solemn Divine Liturgy.",
            "",
            "On August 22, the feast of Our Lady Queen of the World, a solemn Divine Liturgy is celebrated for all patients.",
            "",
            "A second solemnity is celebrated on the 1st Sunday of May. This feast was started in 1912, at the beginning of the First World War, by conscripts preparing to leave for war.",
            "",
            "Since 1967 it has been a special blessing for drivers. On the eve of the parish church of Archangel Michael in Tarampados, where the icon is kept, an Archpriest's Vespers is celebrated and on Sunday at 9 am the procession of the icon to Vrisi begins, where the Archpriest's Divine Liturgy is celebrated.",
            "",
            "After the Holy Mass, the church will be celebrated with a mass in the morning and the Holy Mass will be celebrated in the morning. The prayer of the driver is recited and then the drivers and vehicles of all kinds are blessed.",
          ],
        },
        {
          heading: "“Bebum Carum”",
          paragraphs: [
            "its a Christmas custom of the Catholic inhabitants of the island , which is directly connected with the other custom of the night of Christmas Eve - the \"Good Night\" .",
            "",
            "It derives from the Latin \"Verbum Caro Factum Est\", a statement that summarizes the fundamental belief of Christian theology around the \"Incarnation of Christ\" and the salvation of the world through it.",
            "",
            "The phrase is found in the Gospel of John chap. 1, verse 14. The Greek rendering is \"And the Word was made flesh\".",
            "",
            "The Catholics of the island's villages, before the Christmas Mass, sit at the family table and eat fish soup.",
            "Then they gather in the Church for the Divine Liturgy and, completing the custom, after gathering again at the table, after the customary blessings, they eat roasted pork sausage (which symbolizes the flesh) and other delicacies, wishing each other in a climate of love and peace.",
          ],
        },
      ]}
      locale="en"
    />
  );
}

