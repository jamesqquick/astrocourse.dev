import type { APIRoute } from 'astro';
import { XataClient } from '../../../xata';
import { XATA_API_KEY, XATA_BRANCH } from 'astro:env/server';

export const prerender = false;
export const GET: APIRoute = async (context) => {
  const { coupon } = context.params;
  const xata = new XataClient({
    apiKey: XATA_API_KEY,
    branch: XATA_BRANCH,
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
