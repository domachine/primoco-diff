<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let type: 'error' | 'success' = 'success';
	export let title: string;
	export let time: number | undefined = undefined;

	let visible = false;
	let barStarted = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<dialog
		open
		transition:fly={{
			x: '100%'
		}}
		on:introend={() => {
			barStarted = true;
		}}
		class={type === 'error' ? 'error' : 'success'}
	>
		<button class="dismiss-button">
			<svg
				width="20"
				height="20"
				data-slot="icon"
				aria-hidden="true"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
		</button>
		{#if type === 'error'}
			<svg
				aria-hidden="true"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				width="24"
				style="color: var(--red-700)"
			>
				<path
					d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		{:else if type === 'success'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				height="24"
				width="24"
				style="color: var(--green-400)"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		{/if}
		<p class="title text-slate-950">{title}</p>
		{#if time !== undefined}
			<div
				class="bar"
				style:--shrink-time="{time.toString()}ms"
				style:animation-play-state={barStarted ? 'running' : 'paused'}
				on:animationend={() => {
					barStarted = false;
					visible = false;
				}}
			></div>
		{/if}
	</dialog>
{/if}

<style>
	@keyframes shrink {
		from {
			width: 100%;
		}
		to {
			width: 0;
		}
	}

	dialog {
		all: unset;
		display: grid;
		box-sizing: border-box;
		grid-template-columns: 2rem 1fr;
		position: fixed;
		inset: 1rem 1rem auto auto;
		padding-inline: 1.25rem;
		padding-block: 1.75rem;
		font-family: var(--font-sans);
		background-color: white;
		border-radius: 0.375rem;
		box-shadow: var(--box-shadow-md);
		border: solid 1px var(--gray-300);
		z-index: 2;
	}

	dialog.error {
		background-color: var(--red-50);
	}

	.dismiss-button {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		inset: 0 0 auto auto;
		width: 1.5rem;
		aspect-ratio: 1;
		color: var(--gray-700);
		margin: 0.125rem 0.125rem auto auto;
	}

	.dismiss-button svg {
		display: block;
	}

	.bar {
		position: absolute;
		inset: auto 0 0 0;
		height: 0.25rem;
		background-color: var(--primary-color);
		animation: shrink var(--shrink-time, 300ms) linear forwards;
		border-radius: 0.25rem;
		background-color: rgb(107 114 128 / 0.5);
	}

	dialog > p {
		all: unset;
		font-size: 1rem;
		align-content: center;
	}

	dialog.error > p {
		color: var(--red-800);
	}
</style>
