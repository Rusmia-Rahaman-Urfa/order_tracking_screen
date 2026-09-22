export const scenarios = {
  normal: {
    id: "ORD-10492",
    status: "shipped",
    statusLabel: "In Transit",
    eta: "Sep 24, 6:00 PM",
    trackingNumber: "TRK-9948201",
    carrier: "Express Logistics",
    scenario: "normal",
    product: {
      name: "Wireless Noise-Canceling Headphones",
      variant: "Matte Black",
      price: "$149.00",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
    },
    timeline: [
      { label: "Order Placed", detail: "Sep 21, 10:00 AM", complete: true },
      { label: "Shipped", detail: "Sep 22, 02:30 PM", complete: true },
      { label: "Out for Delivery", detail: "Pending", complete: false },
      { label: "Delivered", detail: "Pending", complete: false }
    ]
  },
  delayed: {
    id: "ORD-10492",
    status: "delayed",
    statusLabel: "Shipment Delayed",
    eta: "Updated ETA: Sep 26, 8:00 PM",
    trackingNumber: "TRK-9948201",
    carrier: "Express Logistics",
    scenario: "delayed",
    delayReason: "Severe weather conditions in transit hub.",
    product: {
      name: "Wireless Noise-Canceling Headphones",
      variant: "Matte Black",
      price: "$149.00",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
    },
    timeline: [
      { label: "Order Placed", detail: "Sep 21, 10:00 AM", complete: true },
      { label: "Shipped", detail: "Sep 22, 02:30 PM", complete: true },
      { label: "Out for Delivery", detail: "Delayed in Transit", complete: false, isError: true },
      { label: "Delivered", detail: "Pending", complete: false }
    ]
  },
  deliveredMissing: {
    id: "ORD-10492",
    status: "delivered",
    statusLabel: "Marked Delivered",
    eta: "Delivered on Sep 23, 4:15 PM",
    trackingNumber: "TRK-9948201",
    carrier: "Express Logistics",
    scenario: "deliveredMissing",
    product: {
      name: "Wireless Noise-Canceling Headphones",
      variant: "Matte Black",
      price: "$149.00",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
    },
    timeline: [
      { label: "Order Placed", detail: "Sep 21, 10:00 AM", complete: true },
      { label: "Shipped", detail: "Sep 22, 02:30 PM", complete: true },
      { label: "Out for Delivery", detail: "Sep 23, 08:00 AM", complete: true },
      { label: "Delivered", detail: "Sep 23, 04:15 PM (Front Door)", complete: true }
    ]
  },
  noTracking: {
    id: "ORD-10492",
    status: "processing",
    statusLabel: "Preparing for Shipment",
    eta: "ETA Pending Tracking Release",
    trackingNumber: "Unassigned",
    carrier: "Standard Ground",
    scenario: "noTracking",
    product: {
      name: "Wireless Noise-Canceling Headphones",
      variant: "Matte Black",
      price: "$149.00",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
    },
    timeline: [
      { label: "Order Placed", detail: "Sep 22, 09:15 AM", complete: true },
      { label: "Processing", detail: "In Warehouse", complete: true },
      { label: "Shipped", detail: "Awaiting Carrier Pickup", complete: false },
      { label: "Delivered", detail: "Pending", complete: false }
    ]
  }
};