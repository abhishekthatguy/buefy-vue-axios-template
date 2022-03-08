/* eslint-disable */
<template>
	<section id="testcomponent" class="section">
		<div class="container has-text-left">
			<!-- <div class="column">
			<div class="column"></div>
			<div class="column">
				<b-field label="Date of Birth">
					<b-datepicker
						v-model="date"
						placeholder="dd/mm/yyyy"
						:min-date="minDate"
						:max-date="maxDate"
					>
					</b-datepicker>
				</b-field>
			</div>
			<div class="column"></div>
		</div> -->
			<div class="column has-text-left box">
				<div class="column"></div>
				<div class="column">
					<h1 class="title">Text Input Field</h1>
					<h2 class="subtitle">Bulma Components</h2>
					<div class="field">
						<label class="label">Default Input text box</label>
						<div class="control">
							<input class="input" type="text" placeholder="Default input" />
						</div>
					</div>
					<div class="field">
						<label class="label">input with icon & alert message</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-success"
								type="text"
								placeholder="Text input"
								value="policy advisor"
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-user"></i>
							</span>
							<span class="icon is-small is-right">
								<i class="fas fa-check"></i>
							</span>
						</div>
						<p class="help is-success">success response</p>
					</div>
					<div class="field">
						<label class="label">small input</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-small"
								type="text"
								placeholder="Small input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Normal input</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-normal"
								type="text"
								placeholder="Normal input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Medium input</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-medium"
								type="text"
								placeholder="Medium input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Large input</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-large"
								type="text"
								placeholder="Large input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Rounded input</label>
						<div class="control has-icons-left has-icons-right">
							<input
								class="input is-rounded"
								type="text"
								placeholder="rounded input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Small loading input</label>
						<div class="control is-small is-loading">
							<input
								class="input is-small"
								type="text"
								placeholder="Small loading input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Normal loading input</label>
						<div class="control is-loading">
							<input
								class="input"
								type="text"
								placeholder="Normal loading input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Medium loading input</label>
						<div class="control is-medium is-loading">
							<input
								class="input is-medium"
								type="text"
								placeholder="Medium loading input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Large loading input</label>
						<div class="control is-large is-loading">
							<input
								class="input is-large"
								type="text"
								placeholder="Large loading input"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">read only input without style</label>
						<div class="control">
							<input
								class="input is-static"
								type="email"
								value="me@example.com"
								readonly
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Input with icon on both side</label>
						<p class="control has-icons-left has-icons-right">
							<input class="input" type="email" placeholder="Email" />
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
							<span class="icon is-small is-right">
								<i class="fas fa-check"></i>
							</span>
						</p>
					</div>
					<h2 class="subtitle">Buefy Components</h2>
					<div class="field">
						<b-field label="Label Onborder" :label-position="labelPosition">
							<b-input value="Enter some text"></b-input>
						</b-field>
						<b-field label="Label Inside" label-position="inside">
							<b-input value="Enter some text"></b-input>
						</b-field>
						<b-field
							label="Username"
							:label-position="labelPosition"
							type="is-success"
							message="This username is available"
						>
							<b-input value="johnsilver" maxlength="30"></b-input>
						</b-field>

						<b-field
							label="Password"
							:label-position="labelPosition"
							type="is-warning"
						>
							<b-input value="123" type="password" maxlength="30"></b-input>
							<template #message>
								<div>Password is too short</div>
								<div>Password must have at least 8 characters</div>
							</template>
						</b-field>
						<b-field custom-class="is-medium" horizontal>
							<template #label>
								With tooltip
								<b-tooltip
									type="is-dark"
									label="Help text here for explanation"
								>
									<b-icon size="is-small" icon="help-circle-outline"></b-icon>
								</b-tooltip>
							</template>
							<b-input size="is-normal"></b-input>
						</b-field>

						<b-field>
							<template #label>
								Label with custom
								<span class="has-text-primary is-italic">style</span>
							</template>
							<b-input></b-input>
						</b-field>
						<b-field label="Small" custom-class="is-small">
							<b-input value="Kevin Garvey" size="is-small"></b-input>
						</b-field>
						<b-field label="Large" custom-class="is-large">
							<b-input value="Kevin Garvey" size="is-large"></b-input>
						</b-field>

						<b-field
							label="Danger"
							custom-class="has-text-danger"
							type="is-danger"
							message="This email is invalid"
						>
							<b-input type="email" value="john@" maxlength="30"> </b-input>
						</b-field>

						<b-field
							label="Multiple (small and success)"
							custom-class="is-small has-text-success"
							type="is-success"
						>
							<b-input
								value="johnsilver"
								maxlength="30"
								size="is-small"
							></b-input>
						</b-field>

						<b-field
							label="Computed (medium and primary)"
							:custom-class="classes"
							type="is-primary"
						>
							<b-input
								value="johnsilver"
								maxlength="30"
								size="is-medium"
							></b-input>
						</b-field>
						<b-field grouped>
							<b-field label="Name" expanded>
								<b-field>
									<b-select placeholder="Title">
										<option>Mr.</option>
										<option>Ms.</option>
									</b-select>
									<b-input placeholder="Name" expanded></b-input>
								</b-field>
							</b-field>
							<b-field label="Email" expanded>
								<b-input placeholder="some@email.com"></b-input>
							</b-field>
						</b-field>
						<b-field position="is-right">
							<b-input placeholder="Search..." type="search" icon="magnify">
							</b-input>
							<p class="control">
								<b-button label="Search" type="is-info" />
							</p>
						</b-field>
						<b-field position="is-right">
							<b-input placeholder="Search..." type="search" icon="magnify">
							</b-input>
							<p class="control">
								<b-button label="Search" type="is-info" />
							</p>
						</b-field>
						<b-field label="Password">
							<b-input type="password" value="iwantmytreasure" password-reveal>
							</b-input>
						</b-field>
						<h3 class="subtitle">With Material Design Icons</h3>
						<b-field>
							<b-input
								placeholder="Search..."
								type="search"
								icon="magnify"
								icon-clickable
								@icon-click="searchIconClick"
							>
							</b-input>
						</b-field>

						<b-field>
							<b-input
								placeholder="Email"
								v-model="email"
								type="email"
								icon="email"
								icon-right="close-circle"
								icon-right-clickable
								@icon-right-click="clearIconClick"
							>
							</b-input>
						</b-field>

						<b-field>
							<b-input placeholder="Credit card" icon="credit-card"> </b-input>
						</b-field>

						<h3 class="subtitle">With FontAwesome</h3>
						<b-field>
							<b-input
								placeholder="Search..."
								type="search"
								icon-pack="fas"
								icon="search"
							>
							</b-input>
						</b-field>

						<b-field>
							<b-input
								placeholder="Email"
								type="email"
								icon-pack="fas"
								icon="envelope"
							>
							</b-input>
						</b-field>
                       

						<b-field>
							<b-input
								placeholder="Credit card"
								icon-pack="far"
								icon="credit-card"
							>
							</b-input>
						</b-field>
                         <h1>HTML-5 validation on blur</h1>
                        <b-field label="Type Email">
							<b-input placeholder="Email" type="email"></b-input>
						</b-field>

						<b-field label="Type Number">
							<b-input placeholder="Number" type="number" min="10" max="20">
							</b-input>
						</b-field>

						<b-field label="Type text (only pattern lowercase a-z allowed)">
							<b-input
								placeholder="User handle (custom validation for only lowercase)"
								type="text"
								required
								validation-message="Only lowercase is allowed"
								pattern="[a-z]*"
							>
							</b-input>
						</b-field>
                        <b-field label="Type number (only 0-9 allowed)">
							<b-input
								placeholder="User handle (custom validation for only number)"
								type="number"
								required
								validation-message="Only number 0-9 is allowed"
								pattern="[0-9]*"
							>
							</b-input>
						</b-field>

						<b-field label="Type URL">
							<b-input placeholder="URL" type="url"></b-input>
						</b-field>

						<b-field label="Type textarea">
							<b-input
								type="textarea"
								minlength="10"
								maxlength="30"
								placeholder="Maxlength automatically counts characters"
							>
							</b-input>
						</b-field>
					
                        
					</div>
				</div>
				<div class="column"></div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'TestComponent',
		props: {
			year: String,
		},
		data() {
			const today = new Date();

			return {
				// date: new Date(),
				date: '',
				minDate: new Date(
					today.getFullYear() - 80,
					today.getMonth(),
					today.getDate(),
				),
				maxDate: new Date(
					today.getFullYear() + 1,
					today.getMonth(),
					today.getDate(),
				),
				labelPosition: 'on-border',
				firstClass: 'has-text-primary',
				secondClass: 'is-medium',
			};
		},
		computed: {
			classes() {
				return `${this.firstClass} ${this.secondClass}`;
			},
           
		},
	};
</script>
