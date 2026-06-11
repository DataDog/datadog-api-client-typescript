import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NetworkHealthInsightCategory } from "./NetworkHealthInsightCategory";
import { NetworkHealthInsightFailureType } from "./NetworkHealthInsightFailureType";
import { NetworkHealthInsightTrafficVolume } from "./NetworkHealthInsightTrafficVolume";

/**
 * Detailed attributes of a network health insight.
 */
export class NetworkHealthInsightAttributes {
  /**
   * AWS account identifier where the certificate is located. Only set for `tls-cert` insights.
   */
  "accountId"?: string;
  /**
   * ARN or identifier of the certificate. Only set for `tls-cert` insights.
   */
  "certificateId"?: string;
  /**
   * Percentage of the certificate's validity period that has elapsed, ranging from 0 to 100.
   * Only set for `tls-cert` insights.
   */
  "certificateLifetimePercent"?: number;
  /**
   * AWS region where the client is located. Only set for `tls-cert` insights.
   */
  "clientRegion"?: string;
  /**
   * Name of the service making the request (DNS query or TLS-secured connection).
   * Set to `N/A` when the client service cannot be determined.
   */
  "clientService"?: string;
  /**
   * Number of days remaining until the certificate expires. Negative values indicate the
   * certificate has already expired. Only set for `tls-cert` insights.
   */
  "daysUntilExpiration"?: number;
  /**
   * Domain name that was being resolved when the DNS failure occurred. Only set for `dns` insights.
   */
  "dnsQuery"?: string;
  /**
   * DNS server that received the failing query. Only set for `dns` insights.
   */
  "dnsServer"?: string;
  /**
   * Domain name covered by the certificate. Only set for `tls-cert` insights.
   */
  "domainName"?: string;
  /**
   * Count of failed events observed during the query window. Only set for `dns`, `tcp`,
   * and `security-group` insights.
   */
  "failureMagnitude"?: number;
  /**
   * Percentage of requests that failed during the query window, ranging from 0 to 100.
   * Only set for `dns`, `tcp`, and `security-group` insights.
   */
  "failureRate"?: number;
  /**
   * Specific failure type within the insight category. For DNS insights: `timeout`, `nxdomain`,
   * `servfail`, or `general_failure`. For TLS certificate insights: `expired` or `expiring_soon`.
   * For security group insights: `denied`.
   */
  "failureType"?: NetworkHealthInsightFailureType;
  /**
   * ARN of the load balancer using the certificate. Only set for `tls-cert` insights.
   */
  "loadbalancerId"?: string;
  /**
   * AWS region where the server or load balancer is located. Only set for `tls-cert` insights.
   */
  "serverRegion"?: string;
  /**
   * Name of the target service the client was trying to reach.
   */
  "serverService"?: string;
  /**
   * Total number of requests observed during the query window. Provides context for
   * `failure_magnitude` and `failure_rate`. Only set for `dns`, `tcp`, and `security-group` insights.
   */
  "totalRequests"?: number;
  /**
   * Network traffic volume metrics between the client and server services during the query window.
   */
  "trafficVolume"?: NetworkHealthInsightTrafficVolume;
  /**
   * Category of network health insight. Indicates whether the insight relates to a DNS issue (`dns`),
   * a TCP issue (`tcp`), a TLS certificate issue (`tls-cert`), or a security group denial (`security-group`).
   */
  "type"?: NetworkHealthInsightCategory;
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    certificateId: {
      baseName: "certificate_id",
      type: "string",
    },
    certificateLifetimePercent: {
      baseName: "certificate_lifetime_percent",
      type: "number",
      format: "double",
    },
    clientRegion: {
      baseName: "client_region",
      type: "string",
    },
    clientService: {
      baseName: "client_service",
      type: "string",
    },
    daysUntilExpiration: {
      baseName: "days_until_expiration",
      type: "number",
      format: "int64",
    },
    dnsQuery: {
      baseName: "dns_query",
      type: "string",
    },
    dnsServer: {
      baseName: "dns_server",
      type: "string",
    },
    domainName: {
      baseName: "domain_name",
      type: "string",
    },
    failureMagnitude: {
      baseName: "failure_magnitude",
      type: "number",
      format: "int64",
    },
    failureRate: {
      baseName: "failure_rate",
      type: "number",
      format: "double",
    },
    failureType: {
      baseName: "failure_type",
      type: "NetworkHealthInsightFailureType",
    },
    loadbalancerId: {
      baseName: "loadbalancer_id",
      type: "string",
    },
    serverRegion: {
      baseName: "server_region",
      type: "string",
    },
    serverService: {
      baseName: "server_service",
      type: "string",
    },
    totalRequests: {
      baseName: "total_requests",
      type: "number",
      format: "int64",
    },
    trafficVolume: {
      baseName: "traffic_volume",
      type: "NetworkHealthInsightTrafficVolume",
    },
    type: {
      baseName: "type",
      type: "NetworkHealthInsightCategory",
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
    return NetworkHealthInsightAttributes.attributeTypeMap;
  }

  public constructor() {}
}
