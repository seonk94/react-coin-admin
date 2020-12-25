import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dropdown, DropdownProps, Grid, Modal } from 'semantic-ui-react';
import { UPDATE_API } from '../../../actions/api';
import { IApi } from '../../../types';

interface Props {
	api: IApi;
}
function IndicatorSelector({ api }: Props) {
	const [open, setOpen] = useState(false);
	const [inputs, setInputs] = useState({
		indicator: '',
		period: '',
	});
	const dispatch = useDispatch();

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

	const handleSubmit = () => {
		dispatch({
			type: UPDATE_API,
			payload: {
				...api,
				indicator: inputs.indicator,
				period: inputs.period,
			},
		});
		setOpen(false);
	};

	const onChange = (_e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const { value, name } = data;
		setInputs({
			...inputs,
			[name]: value,
		});
	};
	return (
		<>
			<Button onClick={() => setOpen(true)}>
				{api.indicator} - {api.period}
			</Button>
			<Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
				<Modal.Header>Select indicator and period</Modal.Header>
				<Modal.Content>
					<Grid>
						<Grid.Row verticalAlign="middle">
							<Grid.Column width={4}>
								<p>Indicator</p>
							</Grid.Column>
							<Grid.Column width={12}>
								<Dropdown
									onChange={onChange}
									fluid
									name="indicator"
									selection
									placeholder="indicator"
									options={indicatorOptions}
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row verticalAlign="middle">
							<Grid.Column width={4}>
								<p>Period</p>
							</Grid.Column>
							<Grid.Column width={12}>
								<Dropdown
									onChange={onChange}
									name="period"
									fluid
									selection
									placeholder="period"
									options={periodOptions}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Modal.Content>
				<Modal.Actions>
					<Button positive onClick={handleSubmit}>
						Confirm
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default React.memo(IndicatorSelector);
