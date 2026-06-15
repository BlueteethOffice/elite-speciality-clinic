"use client";

import { useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import Image from "next/image";
import styles from "../admin.module.css";

export default function ImageUploader({ currentImage, storagePath, onUpload, small = false }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview]     = useState(currentImage || "");
  const inputRef = useRef();

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Local preview
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);
    setUploading(true);

    try {
      const storageRef = ref(storage, `admin/${storagePath}_${Date.now()}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setPreview(url);
      onUpload(url);
    } catch (err) {
      // If Firebase Storage not configured, use local preview
      onUpload(localUrl);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={`${styles.uploader} ${small ? styles.uploaderSmall : ""}`}>
      {preview && (
        <div className={styles.uploaderPreview}>
          <img src={preview} alt="preview" className={styles.uploaderImg} />
        </div>
      )}
      <div className={styles.uploaderActions}>
        <button
          type="button"
          className={styles.uploadBtn}
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : preview ? "Change Image" : "Upload Image"}
        </button>
        {preview && (
          <p className={styles.uploaderPath} title={preview}>
            {preview.startsWith("http") ? "✅ Uploaded" : preview.split("/").pop()}
          </p>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        style={{ display: "none" }}
      />
    </div>
  );
}
