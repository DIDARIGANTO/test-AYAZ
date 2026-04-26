 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..95ca482d120e9a6d5004f1141cd4fde816130b52
--- /dev/null
+++ b/script.js
@@ -0,0 +1,33 @@
+const year = document.getElementById('year');
+if (year) year.textContent = new Date().getFullYear();
+
+const observer = new IntersectionObserver(
+  (entries) => {
+    entries.forEach((entry) => {
+      if (entry.isIntersecting) {
+        entry.target.classList.add('active');
+      }
+    });
+  },
+  { threshold: 0.15 }
+);
+
+document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
+
+// Легкая «плавность переходов» между якорными секциями
+const links = document.querySelectorAll('a[href^="#"]');
+links.forEach((link) => {
+  link.addEventListener('click', (e) => {
+    const target = document.querySelector(link.getAttribute('href'));
+    if (!target) return;
+    e.preventDefault();
+    target.animate(
+      [
+        { transform: 'translateY(8px)', opacity: 0.92 },
+        { transform: 'translateY(0)', opacity: 1 }
+      ],
+      { duration: 450, easing: 'ease-out' }
+    );
+    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
+  });
+});
 
EOF
)
