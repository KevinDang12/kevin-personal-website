const fragmentShader = `
uniform float u_intensity;
uniform float u_time;
uniform float u_blur; // controls blur radius

varying vec2 vUv;
varying float vDisplacement;

// function to compute your base color
vec3 getBaseColor(vec2 uv) {
    float distort = 2.0 * vDisplacement * u_intensity * sin(uv.y * 10.0 + u_time);
    float t = clamp(uv.y + distort, 0.0, 1.0);

    // Lighter blue color
    vec3 blue = vec3(0.4, 0.6, 1.0);
    vec3 green = vec3(0.6, 0.9, 0.6);

    return mix(blue, green, t);
}

void main() {
    vec3 sum = vec3(0.0);
    float count = 0.0;

    // Increased blur radius by using larger multiplier
    float blurRadius = u_blur * 3.0;

    // sample neighboring UVs for blur with increased range
    for (int x = -3; x <= 3; x++) {
        for (int y = -3; y <= 3; y++) {
            vec2 offset = vec2(float(x), float(y)) * blurRadius;
            sum += getBaseColor(vUv + offset);
            count += 1.0;
        }
    }

    vec3 blurred = sum / count;

    gl_FragColor = vec4(blurred, 1.0);
}

`;

export default fragmentShader;

