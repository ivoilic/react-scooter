Buttons come in three flavors:
```js
	<div><Button primary>Primary Button</Button> <Button secondary>Secondary Button</Button> <Button tertiary>Tertiary Button</Button></div>
```
Buttons can be disabled with the 'disable' property. Use the 'enable' property to enable a button but preserve the disabled look:
```js
	  <div><Button primary disabled>Disabled Primary Button</Button> <Button secondary disabled enabled>Visually Disabled Secondary Button</Button> <Button tertiary disabled>Disabled Tertiary Button</Button></div>
```
Buttons can be modified with the 'full' and 'big' properties:
```js
<div>
	<p>
	  <Button primary full>A Full-Width Button</Button>
	</p>
	<p>
	  <Button primary big>A Big Button</Button>
	</p>
	<p>
	  <Button secondary big full>A Big, Full-Width Button</Button>
	</p>
</div>
```