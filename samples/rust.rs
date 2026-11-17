// Kanagawa Dragon — Rust sample (semantic tokens via rust-analyzer)
use std::collections::HashMap;                            // use: red, std: builtin teal

pub const MAX_DRAGONS: u32 = 8;                           // const: orange, u32: aqua

#[derive(Debug, Clone)]                                   // attribute: red
pub struct Dragon {                                       // struct: aqua
    pub name: String,
    scales: Vec<String>,                                  // field: yellow
}

impl Dragon {
    /// Returns the breath power.
    pub fn breathe(&self, intensity: u8) -> Result<u8, String> {  // fn: blue, params: gray
        let mut heat = intensity as u8;                   // mut keyword: violet italic
        if intensity > 5 && heat < 100 {
            heat *= 2;                                    // operators: red
        }
        Ok(heat)                                          // Ok: enum member orange
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {     // dyn: aqua
    let mut dragons = HashMap::new();
    dragons.insert("haku", Dragon {
        name: "haku".to_string(),
        scales: vec!["white".into()],
    });

    for (name, dragon) in &dragons {                      // for: violet bold
        match dragon.breathe(7) {                         // match: violet bold
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
