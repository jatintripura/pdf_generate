import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const doc = new jsPDF();

//image
const image =
  "data:image/png;base64,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";

const imageX = 120;
const imageY = 10;
const imageWidth = 80;
const imageHeight = 30;
doc.addImage(image, "PNG", imageX, imageY, imageWidth, imageHeight);

const paragraph = "The logo ";

const x = 150;
const y = 35;
const maxWidth = 80; // Maximum width of the text box

// Set font size and color
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);

// Add the paragraph with text wrapping
doc.text(paragraph, x, y, { maxWidth: maxWidth, align: "left" });

//frist autoTable
doc.autoTable({
  margin: { top: 40, left: 10 },
  head: [[" ", ""]],

  body: [
    ["BILLED TO:", "Really Great Company"],
    ["PAY TO:", "Avery Devis"],
    ["", "123 Anywhere St.. Any City"],

    ["", "123-456-789"],
    ["Bank:", "Really Great Company"],
    ["Account Name:", "Avery Devis"],
    ["BSB", "0000-0000"],

    ["Acount Number", "0000-0000"],
  ],
  theme: "plain",
  columnStyles: {
    0: {
      fontSize: 14,
      fontStyle: "bold",
      halign: "left",
    },
    1: {
      fontSize: 14,
      halign: "left",
    },
  },
  styles: {
    fontSize: 12,
    // cellPadding: 4,
    // lineColor: 200,
    // lineWidth: 0.5,
  },
  headStyles: {
    // fillColor: [0, 0, 0],
    textColor: 255,
    fontStyle: "bold",
  },
  bodyStyles: {
    // fillColor: [245, 245, 245],
    textColor: 50,
  },
});

// 2nd autoTable

doc.autoTable({
  margin: { top: 50, left: 10 },
  head: [["DESCRIPTION", "RATE", "HOURS", "AMOUNT"]],
  body: [
    ["Content Plan", "$50/hr", "4", "$200.00"],
    ["Copy Writing", "$50/hr", "5", "$100.00"],
    ["Website Design", "$50/hr", "3", "$250.00"],
    ["Website Development", "$100/hr", "5", "$500.00"],
    ["SEO", "$50/hr", "4", "$200.00"],
    ["Sub Total", "", "", "$1,250.00"],
    ["Package Discount(30%", "", "", "$375.00"],
    ["Total", "", "", "$875.00"],
  ],

  columnStyles: {
    0: {
      fontSize: 14,

      halign: "left",
    },
    1: {
      fontSize: 14,

      halign: "center",
    },
    2: {
      fontSize: 14,
      halign: "center",
    },
    3: {
      fontSize: 14,

      halign: "center",
    },
  },
  styles: {
    fontSize: 12,
    cellPadding: 3,
    // lineColor: 200,
    // lineWidth: 0.5,
  },
  headStyles: {
    fillColor: 255,
    textColor: 0,
    fontStyle: "bold",
    halign: "center",
  },
  bodyStyles: {
    // fillColor: [245, 245, 245],
    textColor: 0,
  },
});

// const paragraph =
//   "This is a paragraph with custom styles. It includes multiple lines of text to demonstrate how text wrapping works in jsPDF. The paragraph is styled with a custom font, size, and alignment.";
// const x = 10;
// const y = 200;
// const maxWidth = 180; // Maximum width of the text box

// // Set font size and color
// doc.setFontSize(14);
// doc.setTextColor(50, 60, 100);

// // Add the paragraph with text wrapping
// doc.text(paragraph, x, y, { maxWidth: maxWidth, align: "left" });

const footer =
  "Payment is required within 14 business days of invoice date. Please send remittance to hello@reallygreatsite.com.";
const footerX = 10;
const footerY = 250;
const maxwidth = 180;
doc.setTextColor(0, 0, 0);
doc.text(footer, footerX, footerY, {
  maxWidth: maxwidth,
  align: "left",
  padding: 5,
  lineHeightFactor: 1.5,
});
const greeting = "Thank you for your business";
const X = 10;
const Y = 270;
const width = 180;
doc.setTextColor(0, 0, 0);
doc.text(greeting, X, Y, {
  maxWidth: width,
  align: "left",
  padding: 5,
  lineHeightFactor: 1.5,
});

doc.save("a4.pdf");
