import { DataTable } from "@/components/custom ui/DataTable"
import columns from "@/components/orderItems/OrderItemColumns";


const OrderDetails = async ({ params }: { params: { orderId: string }}) => {
  const res = await fetch(`${process.env.ADMIN_DASHBOARD_URL}/api/orders/${params.orderId}`)
  const { orderDetails, customer } = await res.json()

  const { street, city, state, postalCode, country } = orderDetails.shippingAddress

  return (
    <div className="flex flex-col p-10 gap-5">
      <p className="text-base-bold">
        Order ID: <span className="text-base-medium">{orderDetails._id}</span>
      </p>
      <p className="text-base-bold">
        Customer name: <span className="text-base-medium">{customer.name}</span>
      </p>
      <p className="text-base-bold">
        Shipping address: <span className="text-base-medium">{street}, {city}, {state}, {postalCode}, {country}</span>
      </p>
      <p className="text-base-bold">
        Total Paid: <span className="text-base-medium">${orderDetails.totalAmount}</span>
      </p>
      <p className="text-base-bold">
        Shipping rate ID: <span className="text-base-medium">{orderDetails.shippingRate}</span>
      </p>
      <DataTable columns={columns} data={orderDetails.products} searchKey="product"/>
    </div>
  )
}

// export default OrderDetails

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Plus } from "lucide-react";

// import { columns } from "@/components/orderItems/OrderItemColumns";
// import { DataTable } from "@/components/custom ui/DataTable";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Loader from "@/components/custom ui/Loader";

// const OrderDetails = () => {
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [orderItems, setOrderItems] = useState([]);

//   const getOrderItems = async () => {
//     try {
//       const res = await fetch("/api/orders", {
//         method: "GET",
//       });
//       const data = await res.json();
//       setOrderItems(data);
//       setLoading(false);
//     } catch (err) {
//       console.log("[orderItems_GET]", err);
//     }
//   };

//   useEffect(() => {
//     getOrderItems();
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <div className="px-10 py-5">
//       <div className="flex items-center justify-between">
//         <p className="text-heading2-bold">Order Items</p>
//         <Button
//           className="bg-blue-1 text-white"
//           onClick={() => router.push("/orders/new")}
//         >
//           <Plus className="h-4 w-4 mr-2" />
//           Add Order Item
//         </Button>
//       </div>
//       <Separator className="bg-grey-1 my-4" />
//       <DataTable columns={columns} data={orderItems} searchKey="title" />
//     </div>
//   );
// };

// export default OrderDetails;