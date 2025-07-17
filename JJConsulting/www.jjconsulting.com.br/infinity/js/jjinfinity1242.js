var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function showInfinityAbout(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const infinityAbout = document.getElementById('infinity-about');
        if (!infinityAbout) {
            const response = yield fetch(url);
            const html = yield response.text();
            $("body").append(html);
        }
        OffcanvasHelper.showOffcanvas('infinity-about');
    });
}
function copyToClipboard(content) {
    return __awaiter(this, void 0, void 0, function* () {
        yield navigator.clipboard.writeText(content);
    });
}
class ConnectionStringModel {
    constructor(connectionString) {
        this.integratedSecurity = false;
        this.trustServerCertificate = false;
        this.encrypt = false;
        this.pooling = false;
        this.unmappedValues = {};
        if (connectionString) {
            const pairs = connectionString.split(';');
            pairs.forEach(pair => {
                const [key, value] = pair.split('=').map(part => part.trim());
                if (!key || value === undefined)
                    return;
                switch (key.toLowerCase()) {
                    case 'data source':
                    case 'server':
                        this.server = value;
                        break;
                    case 'user':
                    case 'user id':
                        this.username = value;
                        break;
                    case 'password':
                        this.password = value;
                        break;
                    case 'initial catalog':
                    case 'database':
                        this.database = value;
                        break;
                    case 'application name':
                        this.applicationName = value;
                        break;
                    case 'integrated security':
                        this.integratedSecurity = value.toLowerCase() === 'true';
                        break;
                    case 'trust server certificate':
                        this.trustServerCertificate = value.toLowerCase() === 'true';
                        break;
                    case 'encrypt':
                        this.encrypt = value.toLowerCase() === 'true';
                        break;
                    case 'timeout':
                    case 'connect timeout':
                        this.timeout = parseInt(value, 10);
                        break;
                    case 'pooling':
                        this.pooling = value.toLowerCase() === 'true';
                        break;
                    case 'min pool size':
                        this.minPoolSize = parseInt(value, 10);
                        break;
                    case 'max pool size':
                        this.maxPoolSize = parseInt(value, 10);
                        break;
                    default:
                        this.unmappedValues[key] = value;
                        break;
                }
            });
        }
    }
    toString() {
        const params = [];
        if (this.server)
            params.push(`Data Source=${this.server}`);
        if (this.database)
            params.push(`Initial Catalog=${this.database}`);
        if (this.integratedSecurity)
            params.push(`Integrated Security=True`);
        else {
            if (this.username)
                params.push(`User=${this.username}`);
            if (this.password)
                params.push(`Password=${this.password}`);
        }
        if (this.applicationName)
            params.push(`Application Name=${this.applicationName}`);
        if (this.timeout)
            params.push(`Connect Timeout=${this.timeout}`);
        if (this.trustServerCertificate)
            params.push(`Trust Server Certificate=True`);
        if (this.encrypt)
            params.push(`Encrypt=True`);
        if (this.pooling)
            params.push(`Pooling=True`);
        if (this.minPoolSize)
            params.push(`Min Pool Size=${this.minPoolSize}`);
        if (this.maxPoolSize)
            params.push(`Max Pool Size=${this.maxPoolSize}`);
        for (const key in this.unmappedValues) {
            if (this.unmappedValues.hasOwnProperty(key)) {
                params.push(`${key}=${this.unmappedValues[key]}`);
            }
        }
        return params.join('; ');
    }
}
function downloadFile(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const blob = yield response.blob();
        const header = response.headers.get('Content-Disposition');
        const parts = header.split(';');
        const filename = parts[1].split('=')[1].replaceAll("\"", "");
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const myDefaultAllowList = bootstrap.Tooltip.Default.allowList;
    myDefaultAllowList.span = ['class', 'style', 'data-bs-toggle', 'data-bs-placement', 'data-bs-title'];
});
document.addEventListener("htmx:afterRequest", () => TooltipHelper.listen(" "));
function getMetaContent(name) {
    const metaTag = document.querySelector(`meta[name="${name}"]`);
    return (metaTag === null || metaTag === void 0 ? void 0 : metaTag.content) || null;
}
function getSessionExpiration() {
    const expiresAtStr = getMetaContent("infinity-session-expiration");
    return expiresAtStr ? parseInt(expiresAtStr, 10) : null;
}
document.addEventListener("DOMContentLoaded", () => {
    const expiresAt = getSessionExpiration();
    const expiredLocation = getMetaContent("infinity-session-expired-location");
    if (!expiresAt || !expiredLocation)
        return;
    const interval = setInterval(() => {
        const now = Date.now();
        if (now >= expiresAt) {
            clearInterval(interval);
            window.location.href = expiredLocation;
        }
    }, 5000);
});
function openInNewTab(url) {
    window.open(url, "_blank");
}
function expandAll() {
    document.querySelectorAll('.accordion-collapse').forEach(el => {
        const collapse = bootstrap.Collapse.getOrCreateInstance(el);
        collapse.show();
    });
}
function collapseAll() {
    document.querySelectorAll('.accordion-collapse').forEach(el => {
        const collapse = bootstrap.Collapse.getOrCreateInstance(el);
        collapse.hide();
    });
}
//# sourceMappingURL=jjinfinity.js.map