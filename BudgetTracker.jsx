export const AmountDisplay = ({ label, amount }) => {
  return (
    <p className="text-2xl font-bold text-slate-700">
      {label}: <span className="font-black text-black">${Number(amount).toFixed(2)}</span>
    </p>
  )
}
