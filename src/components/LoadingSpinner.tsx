const LoadingSpinner = () => {
  return (
    <div
      className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-slate-900 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  )
}

export default LoadingSpinner
