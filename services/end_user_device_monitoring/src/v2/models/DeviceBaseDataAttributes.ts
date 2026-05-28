import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Common health and identity attributes shared by every End User Device Monitoring device record.
 */
export class DeviceBaseDataAttributes {
  /**
   * Public key of the Datadog Agent installed on the device.
   */
  "agentKey"?: string;
  /**
   * Version of the Datadog Agent installed on the device.
   */
  "agentVersion"?: string;
  /**
   * Maximum battery capacity expressed as a percentage of the device's design capacity.
   */
  "batteryMaxCapacityPct"?: number;
  /**
   * Number of physical CPU cores on the device.
   */
  "cpuCores"?: number;
  /**
   * Number of logical CPU processors (hardware threads) on the device.
   */
  "cpuLogicalProcessors"?: number;
  /**
   * Human-readable name of the device's CPU model.
   */
  "cpuModel"?: string;
  /**
   * Average CPU usage on the device, as a percentage between 0 and 100.
   */
  "cpuUsage"?: number;
  /**
   * Average disk usage on the device, as a percentage between 0 and 100.
   */
  "diskUsage"?: number;
  /**
   * Last observed IPv4 or IPv6 address of the device.
   */
  "ipAddress"?: string;
  /**
   * List of issue identifiers currently affecting the device.
   * References entries returned by the issues endpoint.
   */
  "issues"?: Array<string>;
  /**
   * Name of the operating system kernel running on the device.
   */
  "kernelName"?: string;
  /**
   * Timestamp of the most recent telemetry received from the device, in RFC 3339 format.
   */
  "lastSeen"?: string;
  /**
   * Manufacturer of the device.
   */
  "manufacturer"?: string;
  /**
   * Average memory usage on the device, as a percentage between 0 and 100.
   */
  "memUsage"?: number;
  /**
   * Total amount of physical memory available on the device, in kilobytes.
   */
  "memoryTotalKb"?: number;
  /**
   * Marketing or product name of the device model.
   */
  "modelName"?: string;
  /**
   * Manufacturer-assigned model number of the device.
   */
  "modelNumber"?: string;
  /**
   * Operating system family running on the device (for example, `mac`, `windows`, or `linux`).
   */
  "os"?: string;
  /**
   * Operating system version running on the device.
   */
  "osVersion"?: string;
  /**
   * Datadog resource identifier for the device.
   */
  "resourceId"?: string;
  /**
   * Serial number assigned to the device by its manufacturer.
   */
  "serialNumber"?: string;
  /**
   * Health status of the device computed from its issues and recent telemetry.
   */
  "status"?: string;
  /**
   * Hardware type of the device (for example, `laptop`, `desktop`, or `mobile`).
   */
  "type"?: string;
  /**
   * Time elapsed since the device last booted, in seconds.
   */
  "uptime"?: number;
  /**
   * BSSID (MAC address of the access point) of the wireless network the device is
   * currently connected to.
   */
  "wlanBssid"?: string;
  /**
   * Received signal strength indicator of the device's current wireless connection, in dBm.
   */
  "wlanRssi"?: number;
  /**
   * SSID of the wireless network the device is currently connected to.
   */
  "wlanSsid"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agentKey: {
      baseName: "agent_key",
      type: "string",
    },
    agentVersion: {
      baseName: "agent_version",
      type: "string",
    },
    batteryMaxCapacityPct: {
      baseName: "battery_max_capacity_pct",
      type: "number",
      format: "int64",
    },
    cpuCores: {
      baseName: "cpu_cores",
      type: "number",
      format: "int64",
    },
    cpuLogicalProcessors: {
      baseName: "cpu_logical_processors",
      type: "number",
      format: "int64",
    },
    cpuModel: {
      baseName: "cpu_model",
      type: "string",
    },
    cpuUsage: {
      baseName: "cpu_usage",
      type: "number",
      format: "double",
    },
    diskUsage: {
      baseName: "disk_usage",
      type: "number",
      format: "double",
    },
    ipAddress: {
      baseName: "ip_address",
      type: "string",
    },
    issues: {
      baseName: "issues",
      type: "Array<string>",
    },
    kernelName: {
      baseName: "kernel_name",
      type: "string",
    },
    lastSeen: {
      baseName: "last_seen",
      type: "string",
    },
    manufacturer: {
      baseName: "manufacturer",
      type: "string",
    },
    memUsage: {
      baseName: "mem_usage",
      type: "number",
      format: "double",
    },
    memoryTotalKb: {
      baseName: "memory_total_kb",
      type: "number",
      format: "int64",
    },
    modelName: {
      baseName: "model_name",
      type: "string",
    },
    modelNumber: {
      baseName: "model_number",
      type: "string",
    },
    os: {
      baseName: "os",
      type: "string",
    },
    osVersion: {
      baseName: "os_version",
      type: "string",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
    },
    serialNumber: {
      baseName: "serial_number",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    uptime: {
      baseName: "uptime",
      type: "number",
      format: "double",
    },
    wlanBssid: {
      baseName: "wlan_bssid",
      type: "string",
    },
    wlanRssi: {
      baseName: "wlan_rssi",
      type: "number",
      format: "double",
    },
    wlanSsid: {
      baseName: "wlan_ssid",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeviceBaseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
