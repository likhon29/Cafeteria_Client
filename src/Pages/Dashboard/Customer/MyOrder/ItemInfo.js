import React from "react";

const ItemInfo = ({item}) => {
  return (
    <tr class="border-b border-slate-200">
      <td class="py-1 pl-4 pr-3  sm:pl-6 md:pl-0">
        <div class="font-medium text-slate-700">{item.title}</div>
        <div class="mt-0.5 text-slate-500 sm:hidden">1 unit at $0.00</div>
      </td>
      <td class="hidden px-3 py-1 text-sm text-right text-slate-500 sm:table-cell">
        {item.quantity}
      </td>
      <td class="hidden px-3 py-1 text-sm text-right text-slate-500 sm:table-cell">
        {item.price} Tk.
      </td>
      <td class="py-1 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
        {item.quantity * item.price} Tk.
      </td>
    </tr>
  );
};

export default ItemInfo;
