
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res) {
  if (req.method === 'POST') {

    console.log(req.body)

    try {
      
        const params = {
            submit_type:'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',

            line_items: req.body.map((item)=> {

              return{
                price_data:{
                  currency:'brl',
                  product_data:{
                    name: item.name,
                    

                  },
                  unit_amount: item.price *100,

                },
                adjustable_quantity:{
                  enabled:true,
                  minmum:1,

                },
                quantity:item.quantity
              }
 
            } ),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }

        
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


