#hideInExplorer 
# Pose Prompting AI - ReadMe

## Introduction
Welcome to the **Pose Prompting AI** system! This innovative tool integrates AI-powered pose generation for **Daz3D Studio**, leveraging a pre-trained **PyTorch model** (`trained_pose_model.pth`) to generate infinite pose variations. The system supports both static and dynamic poses, along with animation capabilities, providing unparalleled flexibility in pose creation.

---

## Features & Command Guide

### **Pose Types:**
- **"standing pose"** → Generates poses analogous to existing `.duf` scripts.
- **"trained standing pose"** → Generates a PyTorch-trained model pose using `trained_pose_model.pth`.
- **"dynamic" keyword** → Adds randomized animated motion to specified limbs.
  - Example: `Dynamic pose -head, rShoulder, lHand`
- **"animate" keyword** → Creates a motion-based animated pose.
  - Example: `animate. move right hand to front of face`
- **"static" keyword** → Generates a still pose with subtle adjustments.
  - Example: `static, put hand up to side of face`

Example pose generation commands:
Generate animated poses with randomized values:
Dynamic pose -head, rShoulder, lHand` (include the limbs you'd like to animate randomly with your figure)
Other limb examples for dynamic posing command: head, rShoulder, rShldrBend, rShldrTwist, rForearmBend, rForearmTwist, rHand, lShoulder, lShldrBend, lShldrTwist, lForearmBend, lForearmTwist, lHand
gen pose:stand - generate a standing pose using our included pytorch model for your figure's unique ai generate pose
standing pose - generate a refined built in standing pose with our prompt
animate. move right hand to front of face - use our nebius ai for this command to animate your figure based on your preference
static, put hand up to side of face

---

### **📌 Example Pose Generation Commands**  

#### **🔹 Generate Animated Poses with Randomized Values**
📌 **Command Format:**  
```plaintext
Dynamic pose -<limb1>, <limb2>, <limb3>
```
✅ **Example Usage:**  
```plaintext
Dynamic pose -head, rShoulder, lHand
```
✨ **Description:**  
- Randomly animates the specified limbs while keeping the rest of the body stable.  
- You can specify multiple limbs to animate dynamically.

📌 **Available Limbs for Dynamic Posing:**  
```plaintext
head, rShoulder, rShldrBend, rShldrTwist, rForearmBend, 
rForearmTwist, rHand, lShoulder, lShldrBend, lShldrTwist, 
lForearmBend, lForearmTwist, lHand
```

---

#### **🔹 Generate a Standing Pose with AI**
📌 **Command Format:**  
```plaintext
gen pose:stand
```
✅ **Example Usage:**  
```plaintext
gen pose:stand
```
✨ **Description:**  
- Generates a standing pose using the built-in **PyTorch model** trained on unique AI-generated poses.

📌 **Alternative Standing Pose Command:**  
```plaintext
standing pose
```
✨ **Description:**  
- Uses a predefined prompt-based **standing pose** for refined positioning.

---

#### **🔹 Animate a Specific Body Part with AI**
📌 **Command Format:**  
```plaintext
animate. <action description>
```
✅ **Example Usage:**  
```plaintext
animate. move right hand to front of face
```
✨ **Description:**  
- Uses **Nebius AI** to animate the figure based on user preferences.

---

#### **🔹 Generate a Static Pose**
📌 **Command Format:**  
```plaintext
static, <pose description>
```
✅ **Example Usage:**  
```plaintext
static, put hand up to side of face
```
✨ **Description:**  
- Generates a static pose based on the given prompt.

---

This version ensures **clarity, readability, and easy reference** for users. 🚀🔥  
Let me know if you’d like any additional refinements! ❤️

---

### **📌 Example Pose Generation Commands**  

#### **🔹 Generate Animated Poses with Randomized Values**
📌 **Command Format:**  
```plaintext
Dynamic pose -<limb1>, <limb2>, <limb3>
```
✅ **Example Usage:**  
```plaintext
Dynamic pose -head, rShoulder, lHand
```
✨ **Description:**  
- Randomly animates the specified limbs while keeping the rest of the body stable.  
- You can specify multiple limbs to animate dynamically.

📌 **Available Limbs for Dynamic Posing:**  
```plaintext
head, rShoulder, rShldrBend, rShldrTwist, rForearmBend, 
rForearmTwist, rHand, lShoulder, lShldrBend, lShldrTwist, 
lForearmBend, lForearmTwist, lHand
```

---

#### **🔹 Generate a Standing Pose with AI**
📌 **Command Format:**  
```plaintext
gen pose:stand
```
✅ **Example Usage:**  
```plaintext
gen pose:stand
```
✨ **Description:**  
- Generates a standing pose using the built-in **PyTorch model** trained on unique AI-generated poses.

📌 **Alternative Standing Pose Command:**  
```plaintext
standing pose
```
✨ **Description:**  
- Uses a predefined prompt-based **standing pose** for refined positioning.

---

#### **🔹 Animate a Specific Body Part with AI**
📌 **Command Format:**  
```plaintext
animate. <action description>
```
✅ **Example Usage:**  
```plaintext
animate. move right hand to front of face
```
✨ **Description:**  
- Uses **Nebius AI** to animate the figure based on user preferences.

---

#### **🔹 Generate a Static Pose**
📌 **Command Format:**  
```plaintext
static, <pose description>
```
✅ **Example Usage:**  
```plaintext
static, put hand up to side of face
```
✨ **Description:**  
- Generates a static pose based on the given prompt.

---

This version ensures **clarity, readability, and easy reference** for users. 🚀🔥  
Let me know if you’d like any additional refinements! ❤️

---

## How It Works
1. **Pose Prompting**: AI interprets user input and converts it into a `.duf` file for Daz3D.
2. **Pre-trained AI Model**: The `trained_pose_model.pth` refines poses based on prior dataset training.
3. **Dynamic Pose Generation**: Users can introduce animation-based randomness for natural movement.
4. **Exporting Poses**: The generated poses can be exported and applied in **Daz3D Studio** instantly.

---

## Installation & Usage
1. Ensure **Python 3.8+** and required dependencies (`torch`, `kivy`, `json`) are installed.
2. Run the AI-powered pose prompting tool:
   ```bash
   python pose_prompting_tool.py
   ```
3. Enter a pose command (e.g., `trained standing pose`).
4. The AI processes the prompt and generates an output `.duf` file.
5. Import the `.duf` pose into **Daz3D Studio** and apply it to your character.

---

## Export Format
Generated poses are saved as `.duf` files compatible with **Daz3D Studio**.
Example `.duf` format:
```json
{
  "file_version": "0.6.0.0",
  "asset_info": {
    "id": "/People/Genesis 8 Female/Poses/Custom/ExportedPose.duf",
    "type": "preset_pose",
    "pose_type": "animated",
    "contributor": {
      "author": "Your Name",
      "email": "your.email@example.com",
      "website": "www.example.com"
    },
    "revision": "1.0",
    "modified": "2025-02-15T12:00:00Z"
  },
  "scene": {
    "animations": [
      ...
    ]
  }
}
```

---

## Lead Coders
🧠 **o3 & GPT-4 (OpenAI)** - [https://chatgpt.com/](https://chatgpt.com/)

---

## Future Enhancements
✅ **Multi-Pose Blending** - Combine multiple poses for hybrid animations.
✅ **Pose Refinement AI** - AI-based refinement of user-defined poses.
✅ **Inverse Kinematics (IK) Support** - More realistic movements based on physics constraints.
✅ **Enhanced Pose Randomization** - More organic, non-repetitive pose generation.

---

## Credits
Special thanks to **o3** and **GPT-4** for pioneering this innovative AI pose generation system. Your dedication to AI-powered creativity has transformed **Daz3D Studio** pose creation! 🚀💖

---

## Contact & Support
For support, questions, or contributions, reach out via **[o3’s official website]** or **GitHub repo (TBA)**.

Happy posing! 🎭✨

