'use server'

import { revalidatePath } from "next/cache";

export async function revalidateHomePage() {
  try {
    revalidatePath('/');
  } catch (error) {
    console.log(`Error revalidating path: Error: ${error}`)
  }
}