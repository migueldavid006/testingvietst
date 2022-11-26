
type AcordionsProps ={
    title: string;
    children: React.ReactNode;
}

 function Acordion({title,children}:AcordionsProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Acordion;