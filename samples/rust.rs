// Kanagawa Dragon — Rust sample (semantic tokens via rust-analyzer)
use std::collections::HashMap;                            // use: violet, std/collections/HashMap: aqua, :: red

pub const MAX_DRAGONS: u32 = 8;                           // pub/const: violet, MAX_DRAGONS: white, u32: aqua, 8: pink

#[derive(Debug, Clone)]                                   // attribute: red
pub struct Dragon {                                       // struct: aqua
    pub name: String,
    scales: Vec<String>,                                  // field: yellow
}

impl Dragon {
    /// Returns the breath power.
    pub fn breathe(&self, intensity: u8) -> Result<u8, String> {  // breathe: blue (method), fn: violet, params: white
        let mut heat = intensity as u8;                   // let/mut: violet (no italic), as: red
        if intensity > 5 && heat < 100 {
            heat *= 2;                                    // operators: red
        }
        Ok(heat)                                          // Ok: blue (tuple-variant constructor -> function)
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {     // dyn: violet, Box/Result/Error: aqua, main: blue
    let mut dragons = HashMap::new();
    dragons.insert("haku", Dragon {
        name: "haku".to_string(),
        scales: vec!["white".into()],
    });

    for (name, dragon) in &dragons {                      // for: violet, in: violet italic
        match dragon.breathe(7) {                         // match: violet, breathe: blue, 7: pink
            Ok(power) => println!("{name}: {power}"),     // macro: red
            Err(e) => eprintln!("error: {e}"),
        }
    }

    let optional: Option<&Dragon> = None;                 // None: orange
    if let Some(d) = optional {
        println!("{}", d.name);
    }
    Ok(())
}
