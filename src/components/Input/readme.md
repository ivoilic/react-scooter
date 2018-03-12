```js
	<form>
		<Input type="text" label="Email Address" placeholder="ivo@dropbox.com" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
		<Grid>
			<Col size="6">
				<Input type="password" label="Password" placeholder="Keep it secret." />
			</Col>
			<Col size="6">
				<Input type="password" label="Confirm Password" placeholder="Keep it safe." />
			</Col>
			<Col size="6">
				<Input label="Disabled" value="This is disabled." disabled/>
			</Col>
			<Col size="6">
				<Input type="textarea" label="Textarea" value="Edit me, I'm an input now!"></Input>
			</Col>
			<Col size="4">
				<Input type="text" label="First Name" error="(Required)" invalid></Input>
			</Col>
			<Col size="4">
				<Input type="text" label="Last Name" value="Housten" valid></Input>
			</Col>
			<Col size="4">
				<Input type="select" label="Country">
					<option>United Kingdom</option>
          			<option>United States</option>
          			<option>NSK</option>
				</Input>
			</Col>
		</Grid>
	</form>
```