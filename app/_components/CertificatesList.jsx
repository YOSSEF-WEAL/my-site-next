import { BASE_URL } from "../_api/apisConfig";
import CertificateCard from "../_ui/CertificateCard";
import Error from "../_ui/Error";

async function CertificatesList({ locale }) {
  const res = await fetch(
    `${BASE_URL}/api/my-certificates?locale=${locale}&populate[certificateImage][fields][0]=url&pagination[pageSize]=25&pagination[page]=1&sort[0]=createdAt:desc`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const { data: certificate } = await res.json();

  return (
    <div className="relative flex justify-center flex-row flex-wrap gap-3.5">
      {!res.ok ? (
        <Error>An error occurred while uploading certificates.</Error>
      ) : (
        certificate.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))
      )}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-90 left-[0%] -z-10 w-full h-screen transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath: "polygon(0% 0%, 30% 0%, 100% 80%, 0% 80%)",
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="relative left-[95%] top-[54%] aspect-1155/678 w-[1000px] h-[54%] -translate-x-1/2 rotate-30 bg-linear-to-tr bg-primary/20 md:bg-primary/30 opacity-30"
        />
      </div>
    </div>
  );
}

export default CertificatesList;
