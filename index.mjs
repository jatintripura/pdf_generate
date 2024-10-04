import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const doc = new jsPDF({
  format: "a4",
  orientation: "portrait",
  unit: "px",
});

//image
const logo =
  "data:image/png;base64,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";

const imageX = 20;
const imageY = 20;
const imageWidth = 150;
const imageHeight = 37.5;
doc.addImage(logo, "PNG", imageX, imageY, imageWidth, imageHeight);
//text
const heading = "INVOICE";
const x_heading = 448 - 20;
const y_heading = 20;
const maxWidth_heading = 140;
doc.setFontSize(36);

doc.setTextColor(0, 0, 0);
doc.text(heading, x_heading, y_heading, {
  maxWidth: maxWidth_heading,
  align: "right",
  baseline: "top",
});
const paragraph = "Invoice No: 6786868";
const x_paragraph = 448 - 20;
const y_paragraph = 50;
const maxWidth_paragraph = 160; // Maximum width of the text box

// Set font size and color for invoice no
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);

// Add the paragraph with text wrapping
doc.text(paragraph, x_paragraph, y_paragraph, {
  maxWidth: maxWidth_paragraph,
  align: "right",
  baseline: "top",
});

const date = "23-March-2024";
const x_date = 448 - 20;
const y_date = 72;
const maxWidth_date = 80;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(date, x_date, y_date, { maxWidth: maxWidth_date, align: "right" });
//frist autoTable

const isuue = "Issued By";
const x_issue = 20;
const y_issue = 110;
const maxWidth_issue = 80;
doc.setFontSize(20);
doc.setTextColor(0, 0, 0);
doc.text(isuue, x_issue, y_issue, { maxWidth: maxWidth_issue, align: "left" });
const isuue_name = "Name : fjaljflajfj";
const x_issue_name = 20;
const y_issue_name = 125;
const maxWidth_issue_name = 200;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(isuue_name, x_issue_name, y_issue_name, {
  maxWidth: maxWidth_issue_name,
  align: "left",
});
const issue_phone = "Phone : 0123456789";
const x_issue_phone = 20;
const y_issue_phone = 140;
const maxWidth_issue_phone = 200;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(issue_phone, x_issue_phone, y_issue_phone, {
  maxWidth: maxWidth_issue_phone,
  align: "left",
});
const issue_address = "Address : Dhaka";
const x_issue_address = 20;
const y_issue_address = 152;
const maxWidth_issue_address = 200;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(issue_address, x_issue_address, y_issue_address, {
  maxWidth: maxWidth_issue_address,
  align: "left",
});
const to = "To :";
const x_to = 448 - 20;
const y_to = 110;
const maxWidth_to = 80;
doc.setFontSize(20);
doc.setTextColor(0, 0, 0);
doc.text(to, x_to, y_to, { maxWidth: maxWidth_to, align: "right" });
const to_name = "Name :ghjghjgjhgjhgj";
const x_to_name = 448 - 20;
const y_to_name = 125;
const maxWidth_to_name = 200;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(to_name, x_to_name, y_to_name, {
  maxWidth: maxWidth_to_name,
  align: "right",
});
const to_phone = "Phone : 0123456789";
const x_to_phone = 448 - 20;
const y_to_phone = 140;
const maxWidth_to_phone = 200;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(to_phone, x_to_phone, y_to_phone, {
  maxWidth: maxWidth_to_phone,
  align: "right",
});
const to_address = "Address : Dhaka";
const x_to_address = 448 - 20;
const y_to_address = 152;
const maxWidth_to_address = 200;
doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(to_address, x_to_address, y_to_address, {
  maxWidth: maxWidth_to_address,
  align: "right",
});
doc.autoTable({
  margin: { top: 180, left: 20 },
  head: [["Items", "Unite Price", "Quantity", "Amount"]],
  body: [
    ["Content Plan", "$50/hr", "4", "$200.00"],
    ["Copy Writing", "$50/hr", "5", "$100.00"],
    ["Website Design", "$50/hr", "3", "$250.00"],
    ["Website Development", "$100/hr", "5", "$500.00"],
    ["SEO", "$50/hr", "4", "$200.00"],
    ["", "", "", ""],
    ["", "", "Total : ", "$875.00"],
    [" ", "", "Tax : ", "$375.00"],
    [" ", "", "Discount : ", "$375.00"],
    [" ", "", "Due : ", "$375.00"],
    [" ", "", "Paid : ", "$375.00"],
  ],

  columnStyles: {
    0: {
      fontSize: 14,

      halign: "left",
    },
    1: {
      fontSize: 14,

      halign: "left",
    },
    2: {
      fontSize: 14,
      halign: "left",
      padding: 8,
    },
    3: {
      fontSize: 14,

      halign: "left",
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
    halign: "left",
  },
  bodyStyles: {
    fillColor: [255, 255, 255],
    textColor: 0,
  },
});

const footer =
  "Payment is required within 14 business days of invoice date. Please send remittance to hello@reallygreatsite.com.";
const footerX = 20;
const footerY = 580;
const maxwidth = 450;
doc.setFontSize(12);
doc.setTextColor(0, 0, 0);

doc.text(footer, footerX, footerY, {
  maxWidth: maxwidth,
  align: "left",
  padding: 5,
  lineHeightFactor: 1.5,
});
const greeting = "Thank you for your business.";
const X = 20;
const Y = 610;
const width = 400;
doc.setTextColor(0, 0, 0);
doc.setFontSize(12);
doc.text(greeting, X, Y, {
  maxWidth: width,
  align: "left",
  padding: 5,
  lineHeightFactor: 1.5,
});

doc.save("a4.pdf");
