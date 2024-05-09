import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter, action }) => {
	//When a item is updated ou created, should sum or subtract based in the value of the operation and quantity
	filter('estoque.items.create', (input:any) => {
		console.log('create', input)
		return { ...input, total: input.quantity, quantity: 0, operation: 'sum' }
	});

	action('estoque.items.update', async (payloadObj, ctx) => {
		const {keys: ids} = payloadObj;
		const targetId = ids[0];
		const [res] = await ctx.database.from('estoque').where({ id: targetId});
		if(res.operation === 'sum' ){
			await ctx.database.from('estoque').update({ total: (res.total || 0) + res.quantity, quantity: 0, operation: 'sum' }).where({ id: targetId });
		}
		if(res.operation === 'subtract'){
			await ctx.database.from('estoque').update({ total: (res.total || 0) - res.quantity, quantity: 0, operation: 'sum' }).where({ id: targetId });
		}
	});
});

