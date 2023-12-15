import type { APIRoute } from 'astro';
import { XataClient } from '../../../xata';

export const GET: APIRoute = async (context) => {
  const { coupon } = context.params;
  console.log('Searching coupon');
  const xata = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH,
  });

  const couponRecord = await xata.db.Coupons.filter({ coupon }).getFirst();

  if (!couponRecord) {
    return new Response(JSON.stringify({ msg: 'Invalid coupon' }), {
      status: 400,
    });
  }
  return new Response(JSON.stringify(couponRecord), {
    status: 200,
  });
};
