export default function Map() {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative mt-12 bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4901844237194!2d28.15858031502931!3d-26.180630783448408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9511116c4c05cb%3A0xe7a505b8aeca0521!2s64%20Rietfontein%20Rd%2C%20Primrose%2C%20Germiston%2C%201401%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Twintronix Refrigeration Location"
        className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
      ></iframe>
    </section>
  );
}
