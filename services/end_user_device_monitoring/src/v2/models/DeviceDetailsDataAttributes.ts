import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeviceEmployee } from "./DeviceEmployee";
import { DeviceGeoIP } from "./DeviceGeoIP";
import { DeviceStatus } from "./DeviceStatus";

/**
 * Extended set of attributes for a single End User Device Monitoring device,
 * including Cloud Network Monitoring and battery metrics.
 */
export class DeviceDetailsDataAttributes {
  /**
   * Public key of the Datadog Agent installed on the device.
   */
  "agentKey"?: string;
  /**
   * Version of the Datadog Agent installed on the device.
   */
  "agentVersion"?: string;
  /**
   * Current battery charge level as a percentage between 0 and 100.
   */
  "batteryChargePct"?: number;
  /**
   * Rate at which the battery is charging or discharging, in milliamperes.
   * Negative values indicate discharge.
   */
  "batteryChargeRate"?: number;
  /**
   * Whether the device's battery health has degraded to a critical level.
   */
  "batteryCritical"?: boolean;
  /**
   * Number of full charge cycles the battery has gone through.
   */
  "batteryCycleCount"?: number;
  /**
   * Maximum battery capacity expressed as a percentage of the device's design capacity.
   */
  "batteryMaxCapacityPct"?: number;
  /**
   * Whether Cloud Network Monitoring is enabled on the device.
   */
  "cnmEnabled"?: boolean;
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
   * Directory information about the employee associated with the device,
   * sourced from a customer reference table.
   * Absent when no reference table is configured or the device has no match.
   */
  "employee"?: DeviceEmployee;
  /**
   * Location derived from the device's public IP address.
   * Absent when no location data is available.
   */
  "geoIp"?: DeviceGeoIP;
  /**
   * Last observed IPv4 or IPv6 address of the device.
   */
  "ipAddress"?: string;
  /**
   * List of issue identifiers currently affecting the device.
   */
  "issues"?: Array<string>;
  /**
   * Name of the operating system kernel running on the device.
   */
  "kernelName"?: string;
  /**
   * Timestamp of the most recent device reboot, in RFC 3339 format.
   */
  "lastReboot"?: string;
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
   * Operating system family running on the device, as reported by the Datadog Agent
   * (for example, `macOS`, `Windows`, or `linux`). Empty when unknown.
   */
  "os"?: string;
  /**
   * Operating system version running on the device.
   */
  "osVersion"?: string;
  /**
   * Number of TCP packets sent by the device over the query window,
   * as reported by Cloud Network Monitoring.
   */
  "packetSent"?: number;
  /**
   * Datadog resource identifier for the device.
   */
  "resourceId"?: string;
  /**
   * Number of TCP packets retransmitted by the device over the query window.
   */
  "retransmit"?: number;
  /**
   * Percentage of sent TCP packets that were retransmitted, between 0 and 100.
   */
  "retransmitPct"?: number;
  /**
   * Serial number assigned to the device by its manufacturer.
   */
  "serialNumber"?: string;
  /**
   * Health status of the device, computed from its issues and recent telemetry.
   * `inactive` means the device stopped reporting. `unknown` means no telemetry is available yet.
   */
  "status"?: DeviceStatus;
  /**
   * Number of TCP connection attempts canceled by the device over the query window.
   */
  "tcpCanceled"?: number;
  /**
   * Number of TCP connections established by the device over the query window.
   */
  "tcpEstablished"?: number;
  /**
   * Percentage of TCP connection attempts that failed, between 0 and 100.
   */
  "tcpEstablishmentFailurePct"?: number;
  /**
   * Number of TCP connection attempts that failed over the query window.
   */
  "tcpEstablishmentFailures"?: number;
  /**
   * Number of TCP connection attempts that failed because the host was unreachable.
   */
  "tcpHostUnreachable"?: number;
  /**
   * Number of TCP connection attempts that failed because the network was unreachable.
   */
  "tcpNetworkUnreachable"?: number;
  /**
   * Number of TCP connection attempts refused by the remote host over the query window.
   */
  "tcpRefusals"?: number;
  /**
   * Number of TCP connection attempts that timed out over the query window.
   */
  "tcpTimeouts"?: number;
  /**
   * Hardware type of the device (for example, `laptop` or `desktop`). `unknown` when the type cannot be determined.
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
    batteryChargePct: {
      baseName: "battery_charge_pct",
      type: "number",
      format: "int64",
    },
    batteryChargeRate: {
      baseName: "battery_charge_rate",
      type: "number",
      format: "int64",
    },
    batteryCritical: {
      baseName: "battery_critical",
      type: "boolean",
    },
    batteryCycleCount: {
      baseName: "battery_cycle_count",
      type: "number",
      format: "int64",
    },
    batteryMaxCapacityPct: {
      baseName: "battery_max_capacity_pct",
      type: "number",
      format: "int64",
    },
    cnmEnabled: {
      baseName: "cnm_enabled",
      type: "boolean",
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
    employee: {
      baseName: "employee",
      type: "DeviceEmployee",
    },
    geoIp: {
      baseName: "geo_ip",
      type: "DeviceGeoIP",
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
    lastReboot: {
      baseName: "last_reboot",
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
    packetSent: {
      baseName: "packet_sent",
      type: "number",
      format: "double",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
    },
    retransmit: {
      baseName: "retransmit",
      type: "number",
      format: "double",
    },
    retransmitPct: {
      baseName: "retransmit_pct",
      type: "number",
      format: "double",
    },
    serialNumber: {
      baseName: "serial_number",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "DeviceStatus",
    },
    tcpCanceled: {
      baseName: "tcp_canceled",
      type: "number",
      format: "double",
    },
    tcpEstablished: {
      baseName: "tcp_established",
      type: "number",
      format: "double",
    },
    tcpEstablishmentFailurePct: {
      baseName: "tcp_establishment_failure_pct",
      type: "number",
      format: "double",
    },
    tcpEstablishmentFailures: {
      baseName: "tcp_establishment_failures",
      type: "number",
      format: "double",
    },
    tcpHostUnreachable: {
      baseName: "tcp_host_unreachable",
      type: "number",
      format: "double",
    },
    tcpNetworkUnreachable: {
      baseName: "tcp_network_unreachable",
      type: "number",
      format: "double",
    },
    tcpRefusals: {
      baseName: "tcp_refusals",
      type: "number",
      format: "double",
    },
    tcpTimeouts: {
      baseName: "tcp_timeouts",
      type: "number",
      format: "double",
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
    return DeviceDetailsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
