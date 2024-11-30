import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./../assets/css/projectdetails.css";



const formatTextWithBold = (text="") => {
  return text
    .split("\n") // Split text into lines
    .map((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        // Bold the text before the colon and format as a line
        const beforeColon = line.slice(0, colonIndex).trim();
        const afterColon = line.slice(colonIndex + 1).trim();
        return `<strong>${beforeColon}:</strong> ${afterColon}`;
      }
      return line.trim(); // Return lines without colons as is
    })
    .filter(Boolean) // Remove empty lines
    .join("<br>"); // Join the lines with line breaks
};


const projects = [
  {
    id: 1,
    title: "Custom Built LED Solutions",
    scope: "Energy-efficient, customizable LED systems tailored to meet residential and commercial needs, delivering superior performance and sustainability.",
    description: `
Custom Built LED Solutions focuses on designing and delivering cutting-edge LED lighting systems personalized for various client requirements. By emphasizing energy efficiency and durability, these solutions cater to diverse applications, ensuring eco-friendly and long-lasting performance.

Features:
1. Customizable Lighting Solutions:
   - Tailored designs to suit residential and commercial spaces.
   - Adjustable brightness and color temperatures for specific applications.
2. High Energy Efficiency:
   - Reduced power consumption with advanced LED technology.
   - Integration of smart controls to optimize energy use.
3. Long-Term Reliability:
   - High-quality components to ensure longevity and minimal maintenance.
   - Robust designs suitable for challenging environments, including outdoor installations.
4. Eco-Friendly Initiatives:
   - Commitment to reducing carbon footprints through sustainable production methods.
   - Recycling options for obsolete systems to minimize e-waste.
`,
    technologiesDetails: `
Technologies Used:
• LED Technology: Advanced diodes for optimized illumination and minimal heat production.
• Circuit Design: Precision-engineered power drivers for consistent performance.
• Simulation Tools: AutoCAD and Dialux for accurate lighting simulations and layouts.
• Smart Integration: IoT-based controls for automated lighting management.
    `,
    images: [
      require('./../assets/ProjectImages/project1/image1.jpg'),
      require('./../assets/ProjectImages/project1/image2.jpg'),
    ],
  },
  {
    id: 2,
    title: "UPS Custom Manufacturing",
    scope: "Reliable, scalable, and client-centric Uninterruptible Power Supply (UPS) systems for consistent power backup.",
    description: `
This project involves the design and manufacturing of high-performance UPS systems customized to meet client-specific power requirements. It ensures seamless transitions during power outages and provides stability for sensitive electronic devices.

Features:
1. Custom Power Solutions:
   - Design and assembly of UPS units for residential, commercial, and industrial use.
   - Options for capacity scaling based on customer needs.
2. Advanced Power Management:
   - Smart battery charging and load balancing technologies.
   - Integration of surge protection and voltage regulation for sensitive equipment.
3. Eco-Friendly Batteries:
   - Use of maintenance-free, lead-acid, and lithium-ion batteries.
   - Environmentally safe disposal practices for depleted units.
4. Monitoring and Diagnostics:
   - Built-in LCD screens for real-time status updates.
   - Remote monitoring through mobile applications.
`,
    technologiesDetails: `
Technologies Used:
• Power Electronics: High-frequency inverters and rectifiers for efficient energy conversion.
• Battery Technology: Advanced lithium-ion cells for prolonged backup and quick recharge.
• Firmware Development: Embedded systems for smart load and battery management.
• Testing and QA: Rigorous testing protocols to ensure system reliability.
    `,
    images: [
      require('./../assets/ProjectImages/project2/image1.jpg'),
      require('./../assets/ProjectImages/project2/image2.jpg'),
    ],
  },
  {
    id: 6,
    title: "Surveillance Camera Installation",
    scope: "Comprehensive security camera systems designed for optimal surveillance and remote monitoring.",
    description: `
This project focuses on implementing state-of-the-art surveillance solutions for both residential and commercial properties. With advanced camera systems, clients can ensure safety and monitor activities in real-time.

Features:
1. High-Quality Cameras:
   - 4K resolution cameras for clear, detailed video capture.
   - Infrared technology for superior night vision performance.
2. Remote Monitoring:
   - Mobile app integration for real-time viewing and playback.
   - Cloud storage options for secure and accessible footage.
3. Smart Features:
   - Motion detection alerts and facial recognition systems.
   - AI-powered analytics to identify unusual activities.
4. Scalable Solutions:
   - Customized installations for small to large-scale properties.
   - Flexible options for wired or wireless configurations.
`,
    technologiesDetails: `
Technologies Used:
• Camera Hardware: IP and HD analog systems with PoE support.
• Software: Video Management Systems (VMS) for comprehensive control.
• Networking: Secure routers and firewalls for protected data transmission.
• AI Integration: Deep learning algorithms for advanced analytics.
    `,
    images: [
      require('./../assets/ProjectImages/project3/image1.jpg'),
      require('./../assets/ProjectImages/project3/image2.jpg'),
    ],
  },
  {
    id: 4,
    title: "Electronics Repair Center",
    scope: "Expert diagnostics and repair services for a wide range of electronics, ensuring optimal functionality.",
    description: `
The Electronics Repair Center offers specialized services for restoring functionality to various electronic appliances. From diagnostics to repairs, it provides reliable solutions to extend the life of electronic devices.

Features:
1. Comprehensive Repair Services:
   - Expertise in LEDs, LCDs, and home appliances.
   - Replacement of faulty components with genuine parts.
2. Advanced Diagnostics:
   - Use of modern tools for accurate fault detection.
   - Detailed repair reports provided for transparency.
3. Customer-Centric Approach:
   - Quick turnaround times to minimize inconvenience.
   - Warranty on repaired components for assurance.
4. Specialized Equipment:
   - High-precision soldering stations and multimeters.
   - Thermal imaging for detecting overheating issues.
`,
    technologiesDetails: `
Technologies Used:
• Tools: Oscilloscopes, SMD rework stations, and signal generators.
• Software: Diagnostic applications for automated fault detection.
• Training: Certified technicians specializing in electronics repair.
    `,
    images: [
      require('./../assets/ProjectImages/project4/repair2.jpeg'),
      require('./../assets/ProjectImages/project4/repair3.jpg'),
    ],
  },
  {
    id: 3,
    title: "Home Wiring Services",
    scope: "Professional and safe wiring solutions for homes and offices.",
    description: `
  This project delivered comprehensive electrical wiring services with a focus on safety and efficiency.
  
  Features:
  1. Wiring installations adhering to safety standards.
  2. Use of high-quality materials for long-term reliability.
  3. Affordable pricing and timely service delivery.
  
  Tools and Methods:
  - Voltage testers, wire strippers, and circuit analyzers.
  - Compliance with industry safety standards.
  `,
    technologiesDetails: `
  Technologies Used:
  • Tools: Voltage testers, wire strippers, circuit analyzers, and insulation resistance testers.
  • Standards: Compliance with NEC (National Electrical Code) and BS 7671 (British Wiring Standards).
  • Training: Certified electricians with expertise in residential and commercial wiring.
    `,
    images: [require('./../assets/ProjectImages/project5/wiring.jpg')],
  },
  {
    id: 5,
    title: "Printing and Photocopying Services",
    scope: "High-quality printing and photocopying solutions.",
    description: `
  This project focused on providing reliable and affordable printing services, including:
  - Document printing, binding, and laminating.
  - High-speed photocopying for bulk orders.
  - Quality assurance through regular equipment maintenance.
  `,
    technologiesDetails: `
  Technologies Used:
  • Equipment: Advanced laser printers, high-speed copiers, and laminators.
  • Software: Graphic design software like Adobe Photoshop and Illustrator for layouts.
  • Maintenance: Scheduled equipment servicing for consistent performance.
    `,
    images: [require('./../assets/ProjectImages/project6/print1.jpg')],
  },

];


const ProjectDetailsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <Container className="project-details-page mt-5">
      <h1 className="text-center mb-4">{project.title}</h1>
      <Row className="mb-4">
        {(project.images || []).map((image, index) => (
          <Col md={4} key={index}>
            <Image src={image} alt={`Project ${index + 1}`} fluid className="project-detail-image" loading="lazy" />
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={6}>
          <h4>Scope</h4>
          <p>{project.scope}</p>
        </Col>
        <Col md={6}>
          <h4>Technologies Used</h4>
          <ul
            className="technologies"
            dangerouslySetInnerHTML={{
              __html: formatTextWithBold(project.technologiesDetails),
            }}
          ></ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4>Description</h4>
          <div
            
            dangerouslySetInnerHTML={{
              __html: formatTextWithBold(project.description),
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailsPage;
