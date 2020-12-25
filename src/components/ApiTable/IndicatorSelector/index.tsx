import React, { useState } from 'react';
import { Button, Dropdown, Grid, Modal } from 'semantic-ui-react';

function IndicatorSelector() {
	const [open, setOpen] = useState(false);

	const indicatorOptions = [
		{ text: 'rsi', key: 'rsi', value: 'rsi' },
		{ text: 'supertrend', key: 'supertrend', value: 'supertrend' },
		{ text: 'wavetrend', key: 'wavetrend', value: 'wavetrend' },
	];

	const periodOptions = [
		{ text: '15m', key: '15m', value: '15m' },
		{ text: '30m', key: '30m', value: '30m' },
		{ text: '1h', key: '1h', value: '1h' },
		{ text: '4h', key: '4h', value: '4h' },
		{ text: '1d', key: '1d', value: '1d' },
	];
	return (
		<>
			<Button onClick={() => setOpen(true)}>rsi - 4h</Button>
			<Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
				<Modal.Header>Select indicator and period</Modal.Header>
				<Modal.Content>
					<Grid>
						<Grid.Row verticalAlign="middle">
							<Grid.Column width={4}>
								<p>Indicator</p>
							</Grid.Column>
							<Grid.Column width={12}>
								<Dropdown fluid selection placeholder="indicator" options={indicatorOptions} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row verticalAlign="middle">
							<Grid.Column width={4}>
								<p>Period</p>
							</Grid.Column>
							<Grid.Column width={12}>
								<Dropdown fluid selection placeholder="period" options={periodOptions} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Modal.Content>
				<Modal.Actions>
					<Button positive onClick={() => setOpen(false)}>
						Confirm
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default IndicatorSelector;
