Avatars come in five sizes:
- xs (16px)
- s (24px)
- m (32px, default)
- l (48px)
- xl (64px)
```js
	<div>
		<Avatar xl alt="Jane Doe" src="http://i.imgur.com/txMlllW.jpg"/>
		<Avatar l alt="John Smith" src="http://i.imgur.com/3DzNLJQ.jpg"/>
		<Avatar m alt="Ivo Ilic" src="https://twitter.com/theivoson/profile_image?size=normal"/>
		<Avatar s alt="Jane Doe" src="http://i.imgur.com/l2Gk1Q5.jpg"/>
		<Avatar xs alt="John Smith" src="http://i.imgur.com/GoCxCU3.jpg"/>
	</div>
```
Avatars will display initials instead of an image if they have the 'noImg' property with a default color of blue:
```js
	<div>
		<Avatar xl alt="Jane Doe" noImg/>
		<Avatar l alt="John Smith" noImg color="#e82110"/>
		<Avatar m alt="Ivo Ilic" noImg/>
		<Avatar s alt="Jane Doe" noImg color="#48ac68"/>
		<Avatar xs alt="John Smith" noImg/>
	</div>
```
Initials are automatically generated but can be overridden with the 'initials' property:
```js
<Avatar noImg alt="Ivo Ilic" initials="AB" />
```