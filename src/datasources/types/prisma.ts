// import {GSContext, GSStatus, GSDataSource, PlainObject} from '@godspeedsystems/core'
// import {MongoClient} from 'mongodb';

// function responseCode(method: string): number {
//   return response_codes[method] || 200;
// }

// const response_codes: { [key: string]: number } = {
//   find: 200,
//   insertOne: 200,
//   insertMany: 201,
//   updateOne: 204,
//   updateMany: 204,
//   deleteMany: 202
// };

// export default class DataSource extends GSDataSource{
//   protected async initClient(): Promise<PlainObject> {
//     const uri = this.config.connection_string;
//     try {
//       const client = new MongoClient(uri);
//       await client.connect();
//       return client;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async execute(ctx: GSContext, args: PlainObject): Promise<any> {
//     const {logger} = ctx;
//     const {
//       meta: {
//         entityType,
//         method,
//         fnNameInWorkflow
//       },
//       data
//     } = args;

//     let mongoMethod:any;
//     const requiredMethod = fnNameInWorkflow.split('.')[2];

//     try {
//       if(this.client){
//         const db = this.client.db('myProject');
//         const collection = db.collection('documents');
//         const client = collection;
//         if(fnNameInWorkflow.split('.')[3]){
//           mongoMethod = await client[requiredMethod][fnNameInWorkflow.split('.')[3]]();
//         }else{
//           mongoMethod = await client[requiredMethod](data);
//         }
//         return Promise.resolve(new GSStatus(true, responseCode(requiredMethod), undefined, data));
//       }
//     } catch (error:any) {
//       logger.error(error);
//       return Promise.reject(new GSStatus(false, 400, error.message, JSON.stringify(error.message)));
//     }
//   }
// }

import { DataSource } from "@godspeedsystems/plugins-prisma-as-datastore/dist";
export default DataSource;