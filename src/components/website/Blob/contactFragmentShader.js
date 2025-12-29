const contactFragmentShader = `
uniform float u_intensity;
uniform float u_time;
uniform float u_blur; // controls blur radius

varying vec2 vUv;
varying float vDisplacement;

// function to compute your base color
vec3 getBaseColor(vec2 uv) {
    // Softer distortion for contact page
    float distort = 1.5 * vDisplacement * u_intensity * sin(uv.y * 8.0 + u_time * 0.5);
    float t = clamp(uv.y + distort, 0.0, 1.0);

    // Light grey to soft blue gradient matching neumorphic design
    vec3 lightGrey = vec3(0.95, 0.95, 0.95);
    vec3 softBlue = vec3(0.85, 0.9, 0.95);

    return mix(lightGrey, softBlue, t);
}

void main() {
    vec3 sum = vec3(0.0);
    float count = 0.0;

    // sample neighboring UVs for blur
    for (int x = -2; x <= 2; x++) {
        for (int y = -2; y <= 2; y++) {
            vec2 offset = vec2(float(x), float(y)) * u_blur;
            sum += getBaseColor(vUv + offset);
            count += 1.0;
        }
    }

    vec3 blurred = sum / count;

    gl_FragColor = vec4(blurred, 1.0);
}
`;

export default contactFragmentShader;

