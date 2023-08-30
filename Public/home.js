function Home(){
  return (
    <center><Card
      txtcolor="white"
      bgcolor="info"
      header="Bank App"
      title="Welcome to the Bank App"
      text="Our app just got better!"
      body={(<img src="bank.jpg" className="img-fluid" alt="Responsive image"/>)}
    /></center>   
  );  
}
