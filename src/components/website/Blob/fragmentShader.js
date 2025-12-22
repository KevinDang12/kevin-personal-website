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

    vec3 blue = vec3(0.0, 0.4, 1.0);
    vec3 green = vec3(0.0, 0.7, 0.3);

    return mix(blue, green, t);
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

export default fragmentShader;