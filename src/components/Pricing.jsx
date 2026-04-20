const prices = [
  {
    category: "Men's services",
    services: [
      { name: "Men's haircut", min: 25, max: 30 },
      { name: "Wash, cut & style", min: 30, max: 35 },
      { name: "Beard trim (add-on)", display: "+$5" },
      { name: "Beard shave (trim & shave)", min: 25, max: 30 },
      { name: "Facial shave", min: 30, max: 35 },
      { name: "Men's hair color", min: 60, max: 70 },
    ],
  },
  {
    category: "Women's services",
    services: [
      { name: "Girls dry haircut", min: 35, max: 45 },
      { name: "Women's haircut — shorter to longer hair", min: 40, max: 60 },
      { name: "Wash, cut & blowout", min: 45, max: 55 },
      { name: "Wash & blowout", min: 45, max: 60 },
      { name: "Curly / flat iron", min: 50, max: 65 },
      { name: "All color services", min: 100, max: 120 },
      { name: "Half head highlight", min: 180, max: 220 },
      { name: "Full head highlight", min: 250, max: 350 },
      { name: "Perm, body & waves", min: 120, max: 200 },
    ],
  },
];

const fontStyle = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

function formatPrice(service) {
  if (service.display != null) return service.display;
  if (service.min === service.max) return `$${service.min}`;
  return `$${service.min}–$${service.max}`;
}

const Pricing = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      {prices.map((block) => (
        <div key={block.category}>
          <h3
            className="text-lg font-normal text-[#1e3a5f] mb-3"
            style={fontStyle}
          >
            {block.category}
          </h3>
          <div className="overflow-x-auto border border-[#1e3a5f]/15">
            <table className="w-full min-w-[280px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#1e3a5f]/15 text-[#1e3a5f]/75">
                    <th
                      scope="col"
                      className="py-3 px-4 text-xs font-medium uppercase tracking-wider"
                      style={fontStyle}
                    >
                      Service
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-4 text-xs font-medium uppercase tracking-wider text-right w-[7.5rem]"
                      style={fontStyle}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {block.services.map((service, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#1e3a5f]/[0.08] last:border-0 text-[#1e3a5f] hover:bg-[#1e3a5f]/[0.04] transition-colors"
                    >
                      <td
                        className="py-2.5 px-4 font-light text-sm align-top"
                        style={fontStyle}
                      >
                        {service.name}
                      </td>
                      <td
                        className="py-2.5 px-4 text-sm font-normal text-right whitespace-nowrap align-top"
                        style={fontStyle}
                      >
                        {formatPrice(service)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      ))}

      <p
        className="text-xs text-[#1e3a5f]/60 text-center italic font-light"
        style={fontStyle}
      >
        *Men’s services require less time
      </p>
    </div>
  );
};

export default Pricing;
