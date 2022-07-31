use std::fs::{metadata, File};
use std::io::{Read, Write};
use std::path::PathBuf;

use dirs::config_dir;

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
pub fn load_profiles() -> String {
    let config_file = get_config_path();
    println!("try to parse config file at {:?}", config_file);
    let file = File::open(&config_file).ok();
    let meta = metadata(&config_file);
    if file.is_none() || meta.is_err() {
        return "{}".to_string()
    }
    let mut file = file.unwrap();
    let meta = meta.unwrap();

    let mut buf = String::with_capacity(meta.len() as usize);
    let res = file.read_to_string(&mut buf);
    if res.is_err() {
        return "{}".to_string()
    }
    buf
}

#[tauri::command]
pub fn store_profiles(content: &str) -> String {
    let config_file = get_config_path();
    println!("try to save config file to {:?}", config_file);
    let mut file = match File::create(config_file) {
        Ok(f) => f,
        Err(e) => return e.to_string(),
    };
    let res = file.write_all(content.as_bytes());
    if res.is_err() {
        return format!("{:?}", res)
    }
    "".to_string()
}

fn get_config_path() -> PathBuf {
    config_dir()
        .unwrap_or(PathBuf::from("."))
        .join("dbviewer/config.json")
}
