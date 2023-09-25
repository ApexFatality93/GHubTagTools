export function getRegions(galaxy: string): Set<string> {
	const regionGlyphs = [
		'F9556C30',
		'F9555C30',
		'F9555C31',
		'F9556C31',
		'F9557C31',
		'F9557C30',
		'F9557C2F',
		'F9556C2F',
		'F9555C2F',
		'FA556C30',
		'F8556C30',
	];

	const EisHubGlyphs = [
		'FA556C30',
		'FA555C30',
		'FA555C31',
		'FA556C31',
		'FA557C31',
		'FA557C30',
		'FA557C2F',
		'FA556C2F',
		'FA555C2F',
		'F8556C30',
		'F8555C30',
		'F8555C31',
		'F8556C31',
		'F8557C31',
		'F8557C30',
		'F8557C2F',
		'F8556C2F',
		'F8555C2F',
	];

	const CalHubGlyphs = [
		'FA556C30',
    		'F8556C30',
		'F9554C2F',
		'F9554C30',
		'F9554C31',
		'F9554C32',
		'F9555C32',
		'F9556C32',
		'F9557C32',
		'F9558C32',
		'F9558C31',
		'F9558C30',
		'F9558C2F',
		'F9558C2E',
		'F9557C2E',
		'F9556C2E',
		'F9555C2E',
		'F9554C2E',
		'FA555C30',
		'FA555C31',
		'FA556C31',
		'FA557C31',
		'FA557C30',
		'FA557C2F',
		'FA556C2F',
		'FA555C2F',
		'F8555C30',
		'F8555C31',
		'F8556C31',
		'F8557C31',
		'F8557C30',
		'F8557C2F',
		'F8556C2F',
		'F8555C2F',
		'FB556C30',
		'F7556C30',
	];
	
	if (galaxy == 'Eissentam') {
		regionGlyphs.splice(-2, 2, ...EisHubGlyphs);
	} 
	else if (galaxy == 'Calypso') {
		regionGlyphs.splice(-2, 2, ...CalHubGlyphs);
	}
	return new Set(regionGlyphs);

};
