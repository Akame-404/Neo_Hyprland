{
  "layer": "top",
    "mod": "dock",
    "height": 31,
    "modules-left": ["custom/arch", "hyprland/workspaces","custom/l_end","wlr/taskbar","custom/spotify","custom/r_end"],
    "modules-center": ["clock"],
    "modules-right": ["backlight","pulseaudio","pulseaudio#microphone", "battery", "network","memory","custom/notifications"],
    "custom/arch": {
      "format": "   ",
      "on-click": "wlogout"
    },

    "hyprland/workspaces": {
      "format": "{icon}",
      "on-click": "activate",
      "all-outputs": true,
      "persistent_workspaces" :{
          "1": []
        },
        "format-icons": {
                "1": "1",
             		"2": "2",
             		"3": "3",
             		"4": "4",
             		"5": "5",
             		"6": "6",
             		"7": "7",
             		"8": "8",
             		"9": "9",
             		"10": "10"
          }
    },

    "wlr/taskbar": {
    "format": "{icon}",
    "rotate": 0,
    "icon-size": 18,
    "icon-theme": "Tela-circle-dracula",
        "spacing": 0,
    "tooltip-format": "{title}",
    "on-click": "activate",
    "on-click-middle": "close",
    "ignore-list": [
      "Alacritty"
    ],
    "app_ids-mapping": {
      "firefoxdeveloperedition": "firefox-developer-edition"
    }
  },

    "clock": {
        "format": "{:%I:%M %p}",
        "rotate": 0,
        "format-alt": "{:%R 󰃭 %d·%m·%y}",
        "tooltip-format": "<tt>{calendar}</tt>",
        "calendar": {
            "mode": "month",
            "mode-mon-col": 3,
            "on-scroll": 1,
            "on-click-right": "mode",
            "format": {
                "months": "<span color='#ffead3'><b>{}</b></span>",
                "weekdays": "<span color='#ffcc66'><b>{}</b></span>",
                "today": "<span color='#ff6699'><b>{}</b></span>"
            }
        },
        "actions": {
            "on-click-right": "mode",
            "on-click-forward": "tz_up",
            "on-click-backward": "tz_down",
            "on-scroll-up": "shift_up",
            "on-scroll-down": "shift_down"
        }
    },


    "custom/cava": {
      "format": "<span color='#f7768e'></span> {volume}%",
      "exec": "sh ~/.config/polybar/scripts/cava.sh" ,
      "label": "%output%"
      },
    "backlight": {
        "device": "intel_backlight",
        "rotate": 0,
        "format": "{icon} {percent}%",
        "format-icons": ["", "", "", "", "", "", "", "", ""],
        "on-scroll-up": "brightnessctl set 1%+",
        "on-scroll-down": "brightnessctl set 1%-",
        "min-length": 6
    },
    "custom/sound": {
      "format": "<span color='#5d7'> </span>{}",
      "exec": "custom-alsa.sh",
    },

    "network": {
        "tooltip": true,
        "format-wifi": " ",
        "rotate": 0,
        "format-ethernet": "󰈀 ",
        "tooltip-format": "Network: <big><b>{essid}</b></big>\nSignal strength: <b>{signaldBm}dBm ({signalStrength}%)</b>\nFrequency: <b>{frequency}MHz</b>\nInterface: <b>{ifname}</b>\nIP: <b>{ipaddr}/{cidr}</b>\nGateway: <b>{gwaddr}</b>\nNetmask: <b>{netmask}</b>",
        "format-linked": "󰈀 {ifname} (No IP)",
        "format-disconnected": "󰖪 ",
        "tooltip-format-disconnected": "Disconnected",
        "format-alt": "<span foreground='#99ffdd'> {bandwidthDownBytes}</span> <span foreground='#ffcc66'> {bandwidthUpBytes}</span>",
        "interval": 2,
    },

    "custom/spotify": {
        "exec": "mediaplayer.py --player spotify",
        "format": " {}",
        "rotate": 0,
        "return-type": "json",
        "on-click": "playerctl play-pause --player spotify",
        "on-click-right": "playerctl next --player spotify",
        "on-click-middle": "playerctl previous --player spotify",
        "on-scroll-up": "volumecontrol.sh -p spotify i",
        "on-scroll-down": "volumecontrol.sh -p spotify d",
        "max-length": 25,
        "escape": true,
        "tooltip": true
    },

    "battery": {
        "states": {
            "good": 95,
            "warning": 30,
            "critical": 20
        },
        "format": "{icon} {capacity}%",
        "rotate": 0,
        "format-charging": " {capacity}%",
        "format-plugged": " {capacity}%",
        "format-alt": "{time} {icon}",
        "format-icons": ["󰂎", "󰁺", "󰁻", "󰁼", "󰁽", "󰁾", "󰁿", "󰂀", "󰂁", "󰂂", "󰁹"]
    },


    "pulseaudio": {
        "format": "{icon} {volume}",
        "rotate": 0,
        "format-muted": "",
        "on-click": "pavucontrol -t 3",
        "on-click-middle": "~/.local/share/bin/volumecontrol.sh -o m",
        "on-scroll-up": "pactl set-sink-volume @DEFAULT_SINK@ +1%",
        "on-scroll-down": "pactl set-sink-volume @DEFAULT_SINK@ -1%",
        "tooltip-format": "{icon} {desc} // {volume}%",
        "scroll-step": 5,
        "format-icons": {
            "headphone": "",
            "hands-free": "",
            "headset": "",
            "phone": "",
            "portable": "",
            "car": "",
            "default": ["", "", " "]
        }
    },

    "pulseaudio#microphone": {
        "format": "{format_source}",
        "rotate": 0,
        "format-source": "",
        "format-source-muted": "",
        "on-click": "pavucontrol -t 4",
        "on-click-middle": "~/.local/share/bin/volumecontrol.sh -i m",
        "on-scroll-up": "pactl set-source-volume @DEFAULT_SOURCE@ +1%",
        "on-scroll-down": "pactl set-source-volume @DEFAULT_SOURCE@ -1%",
        "tooltip-format": "{format_source} {source_desc} // {source_volume}%",
        "scroll-step": 5
    },

    "memory": {
        "states": {
            "c": 90, // critical
            "h": 60, // high
            "m": 30, // medium
        },
        "interval": 30,
        "format": "󰾆 {used}GB",
        "format-m": "󰾅 {used}GB",
        "format-h": "󰓅 {used}GB",
        "format-c": " {used}GB",
        "format-alt": "󰾆 {percentage}%",
        "max-length": 10,
        "tooltip": true,
        "tooltip-format": "󰾆 {percentage}%\n {used:0.1f}GB/{total:0.1f}GB",
        "on-click-right": "kitty btop"

    },

    "tray": {
    "icon-size": 20,
    "reverse-direction": true,
    "spacing": 6
    },
    "cpu": {
    "format": "<span foreground='#ff005f'></span>  {usage}%"
     },
     "temperature": {
    "critical-threshold": 80,
    "format": "<span foreground='#5d73ca'></span> {temperatureC}°C"
     },
    "custom/playerctl": {
     "format": "{icon}  <span>{}</span>",
     "return-type": "json",
     "max-length": 55,
     "exec": "playerctl -a metadata --format '{\"text\": \"  {{markup_escape(title)}}\", \"tooltip\": \"{{playerName}} : {{markup_escape(title)}}\", \"alt\": \"{{status}}\", \"class\": \"{{status}}\"}' -F",
     "on-click-middle": "playerctl previous",
     "on-click": "playerctl play-pause",
     "on-click-right": "playerctl next",
     "format-icons": {
       "Paused": "<span foreground='#bb9af7'></span>",
       "Playing": "<span foreground='#bb9af7'></span>"
     }
     },
    "custom/notifications": {
          "tooltip": false,
          "format": "{icon} {}",
          "rotate": 0,
          "format-icons": {
              "email-notification": "<span foreground='white'><sup></sup></span>",
              "chat-notification": "󱋊<span foreground='white'><sup></sup></span>",
              "warning-notification": "󱨪<span foreground='yellow'><sup></sup></span>",
              "error-notification": "󱨪<span foreground='red'><sup></sup></span>",
              "network-notification": "󱂇<span foreground='white'><sup></sup></span>",
              "battery-notification": "󰁺<span foreground='white'><sup></sup></span>",
              "update-notification": "󰚰<span foreground='white'><sup></sup></span>",
              "music-notification": "󰝚<span foreground='white'><sup></sup></span>",
              "volume-notification": "󰕿<span foreground='white'><sup></sup></span>",
              "notification": "<span foreground='white'><sup></sup></span>",
              "none": ""
          },
          "return-type": "json",
          "exec-if": "which dunstctl",
          "exec": "notifications.py",
          "on-click": "sleep 0.1 && dunstctl history-pop",
          "on-click-middle": "dunstctl history-clear",
          "on-click-right": "dunstctl close-all",
          "interval": 1,
          "tooltip": true,
          "escape": true
      },


// modules for padding //

    "custom/l_end": {
        "format": " ",
        "interval" : "once",
        "tooltip": false
    },

    "custom/r_end": {
        "format": " ",
        "interval" : "once",
        "tooltip": false
    },

    "custom/sl_end": {
        "format": " ",
        "interval" : "once",
        "tooltip": false
    },

    "custom/sr_end": {
        "format": " ",
        "interval" : "once",
        "tooltip": false
    },

    "custom/rl_end": {
        "format": " ",
        "interval" : "once",
        "tooltip": false
    },

    "custom/rr_end": {
        "format": " ",
        "interval" : "once",
        "tooltip": false
    },

    "custom/padd": {
        "format": "  ",
        "interval" : "once",
        "tooltip": false
    }

}

}
