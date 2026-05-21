import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an aggregated connection.
 */
export class SingleAggregatedConnectionResponseDataAttributes {
  /**
   * The total number of bytes sent by the client over the given period.
   */
  "bytesSentByClient"?: number;
  /**
   * The total number of bytes sent by the server over the given period.
   */
  "bytesSentByServer"?: number;
  /**
   * The key, value pairs for each group by.
   */
  "groupBys"?: { [key: string]: Array<string> };
  /**
   * The total number of packets sent by the client over the given period.
   */
  "packetsSentByClient"?: number;
  /**
   * The total number of packets sent by the server over the given period.
   */
  "packetsSentByServer"?: number;
  /**
   * Measured as TCP smoothed round trip time in microseconds (the time between a TCP frame being sent and acknowledged).
   */
  "rttMicroSeconds"?: number;
  /**
   * The number of TCP connections in a closed state. Measured in connections per second from the client.
   */
  "tcpClosedConnections"?: number;
  /**
   * The number of TCP segments acknowledged with the ECN Congestion Experienced (CE) mark, indicating that an upstream router marked packets as experiencing congestion.
   */
  "tcpDeliveredCe"?: number;
  /**
   * The number of TCP connections in an established state. Measured in connections per second from the client.
   */
  "tcpEstablishedConnections"?: number;
  /**
   * The number of TCP zero-window probes sent. These probes are sent when the receiver advertises a zero receive window, indicating it cannot accept more data.
   */
  "tcpProbe0Count"?: number;
  /**
   * The number of TCP packets received out of order. This indicates network-level packet reordering, which can degrade TCP performance by triggering spurious retransmissions and reducing throughput.
   */
  "tcpRcvOooPack"?: number;
  /**
   * The number of TCP fast recovery events. Fast recovery retransmits lost segments detected through duplicate ACKs or selective acknowledgment (SACK) without waiting for a retransmission timeout.
   */
  "tcpRecoveryCount"?: number;
  /**
   * The number of TCP connections that were refused by the server. Typically this indicates an attempt to connect to an IP/port that is not receiving connections, or a firewall/security misconfiguration.
   */
  "tcpRefusals"?: number;
  /**
   * The number of times reordering of sent packets was detected. Reordering detection adjusts the duplicate ACK threshold, preventing spurious retransmissions caused by out-of-order delivery.
   */
  "tcpReordSeen"?: number;
  /**
   * The number of TCP connections that were reset by the server.
   */
  "tcpResets"?: number;
  /**
   * TCP Retransmits represent detected failures that are retransmitted to ensure delivery. Measured in count of retransmits from the client.
   */
  "tcpRetransmits"?: number;
  /**
   * The number of TCP retransmission timeouts (RTOs). An RTO occurs when an ACK is not received within the estimated round-trip time, forcing the sender to retransmit and halve its congestion window.
   */
  "tcpRtoCount"?: number;
  /**
   * The number of TCP connections that timed out from the perspective of the operating system. This can indicate general connectivity and latency issues.
   */
  "tcpTimeouts"?: number;
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
    bytesSentByClient: {
      baseName: "bytes_sent_by_client",
      type: "number",
      format: "int64",
    },
    bytesSentByServer: {
      baseName: "bytes_sent_by_server",
      type: "number",
      format: "int64",
    },
    groupBys: {
      baseName: "group_bys",
      type: "{ [key: string]: Array<string>; }",
    },
    packetsSentByClient: {
      baseName: "packets_sent_by_client",
      type: "number",
      format: "int64",
    },
    packetsSentByServer: {
      baseName: "packets_sent_by_server",
      type: "number",
      format: "int64",
    },
    rttMicroSeconds: {
      baseName: "rtt_micro_seconds",
      type: "number",
      format: "int64",
    },
    tcpClosedConnections: {
      baseName: "tcp_closed_connections",
      type: "number",
      format: "int64",
    },
    tcpDeliveredCe: {
      baseName: "tcp_delivered_ce",
      type: "number",
      format: "int64",
    },
    tcpEstablishedConnections: {
      baseName: "tcp_established_connections",
      type: "number",
      format: "int64",
    },
    tcpProbe0Count: {
      baseName: "tcp_probe0_count",
      type: "number",
      format: "int64",
    },
    tcpRcvOooPack: {
      baseName: "tcp_rcv_ooo_pack",
      type: "number",
      format: "int64",
    },
    tcpRecoveryCount: {
      baseName: "tcp_recovery_count",
      type: "number",
      format: "int64",
    },
    tcpRefusals: {
      baseName: "tcp_refusals",
      type: "number",
      format: "int64",
    },
    tcpReordSeen: {
      baseName: "tcp_reord_seen",
      type: "number",
      format: "int64",
    },
    tcpResets: {
      baseName: "tcp_resets",
      type: "number",
      format: "int64",
    },
    tcpRetransmits: {
      baseName: "tcp_retransmits",
      type: "number",
      format: "int64",
    },
    tcpRtoCount: {
      baseName: "tcp_rto_count",
      type: "number",
      format: "int64",
    },
    tcpTimeouts: {
      baseName: "tcp_timeouts",
      type: "number",
      format: "int64",
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
    return SingleAggregatedConnectionResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
