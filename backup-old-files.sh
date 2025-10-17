#!/bin/bash

# Backup script for old files before cleanup
# Run this before deleting old structure: bash backup-old-files.sh

echo "Creating backup of old files..."

# Create backup directory
mkdir -p .backup_old_structure

# Backup old files
cp Layout.js .backup_old_structure/ 2>/dev/null || echo "Layout.js not found or already moved"
cp home .backup_old_structure/ 2>/dev/null || echo "home not found or already moved"
cp products .backup_old_structure/ 2>/dev/null || echo "products not found or already moved"
cp productDetail .backup_old_structure/ 2>/dev/null || echo "productDetail not found or already moved"
cp about .backup_old_structure/ 2>/dev/null || echo "about not found or already moved"
cp FAQ .backup_old_structure/ 2>/dev/null || echo "FAQ not found or already moved"
cp Contact .backup_old_structure/ 2>/dev/null || echo "Contact not found or already moved"
cp -r compnents .backup_old_structure/ 2>/dev/null || echo "compnents not found or already moved"
cp -r Entities .backup_old_structure/ 2>/dev/null || echo "Entities not found or already moved"

echo "✅ Backup complete! Old files saved in .backup_old_structure/"
echo ""
echo "To remove old files after verifying new structure works:"
echo "  rm -f Layout.js home products productDetail about FAQ Contact"
echo "  rm -rf compnents Entities"
echo ""
echo "To restore from backup (if needed):"
echo "  cp -r .backup_old_structure/* ."
