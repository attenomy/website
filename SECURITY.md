# Attenomy — Security Policy & Disclosure Guidelines

Attenomy prioritizes the security, privacy, and integrity of our digital platforms, customer data, and open-source software repositories. This document outlines security practices and vulnerability reporting procedures for the **[attenomy/website](https://github.com/attenomy/website)** repository and services under `attenomy.com`.

---

## 🛡️ Supported Software Versions

Security patches and vulnerability updates are maintained for the following versions:

| Version | Supported | Maintenance Status |
| :--- | :---: | :--- |
| `v1.0.x` | ✅ | Active Security Maintenance (Current Release) |
| `< 1.0.0` | ❌ | Legacy Release |

---

## 🚨 Reporting Security Vulnerabilities

If you discover a potential security vulnerability or sensitive data exposure within `attenomy.com`, `people.attenomy.com`, or the `attenomy/website` codebase, please notify our security team responsibly prior to public disclosure.

### Contact Channels
- **Security Email**: **`security@attenomy.com`** or **`founders@attenomy.com`**
- **GitHub Security Advisories**: [github.com/attenomy/website/security/advisories](https://github.com/attenomy/website/security/advisories)

### Submission Requirements
1. Summary and potential impact of the vulnerability.
2. Step-by-step proof-of-concept (PoC) or reproduction steps.
3. Affected components, routes, or dependencies.

### Response Commitment
- **Acknowledgment**: Within 24 hours.
- **Status Update & Assessment**: Within 48 hours.
- **Remediation**: Patched and deployed within 5 business days for critical vulnerabilities.

---

## 🔒 Security Practices

- **Strict Environment Separation**: Production secrets and API keys are isolated via environment variables.
- **Dependency Auditing**: Automatic vulnerability scanning via GitHub Dependabot and `npm audit`.
- **Sanitized Outputs**: React Server Components and Next.js App Router enforce strict XSS prevention and output escaping.

---

## 🌐 Official Resources

- **GitHub Repository**: [github.com/attenomy/website](https://github.com/attenomy/website)
- **Main Website**: [attenomy.com](https://attenomy.com)
- **Security Email**: `security@attenomy.com`

---

<div align="center">
  <sub>© 2026 Attenomy Security Team. Managed under <code>attenomy/website</code>.</sub>
</div>
