const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.SVGPicture,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{user_1: 0},
	{Sólido: 0},
	{chão: 0},
	{Sprite: 0},
	{lava: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{ImagemSVG: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Texto: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Texto2: 0},
	{pontos: 0}
];

self.InstanceType = {
	user_1: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	ImagemSVG: class extends self.ISVGPictureInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {}
}