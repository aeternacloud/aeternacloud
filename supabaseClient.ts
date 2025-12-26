import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

function createNoopClient() {
	// Minimal no-op client for development when env vars are not provided.
	// It implements the `.from(...).insert(...)` chain used in this project.
	return {
		from: (_: string) => ({
			insert: async (_rows: any[]) => {
				// Log so developers can see that data was not persisted
				// and return a shape similar to Supabase's response.
				// eslint-disable-next-line no-console
				console.warn('[supabase] No-op insert called (VITE_SUPABASE_* not set).', _rows)
				return { data: null, error: null }
			},
			select: async () => ({ data: null, error: null }),
		}),
		auth: {
			signIn: async () => ({ data: null, error: null }),
			signOut: async () => ({ data: null, error: null }),
		},
	} as any
}

export const supabase =
	supabaseUrl && supabaseAnonKey
		? createClient(supabaseUrl, supabaseAnonKey)
		: createNoopClient()

if (!supabaseUrl || !supabaseAnonKey) {
	// eslint-disable-next-line no-console
	console.warn(
		'VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not set. Supabase client running in no-op mode.'
	)
}