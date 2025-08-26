/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostMeta } from "./HostMeta";
import { HostMetrics } from "./HostMetrics";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing a host.
 */
export class Host {
  /**
   * Host aliases collected by Datadog.
   */
  "aliases"?: Array<string>;
  /**
   * The Datadog integrations reporting metrics for the host.
   */
  "apps"?: Array<string>;
  /**
   * AWS name of your host.
   */
  "awsName"?: string;
  /**
   * The host name.
   */
  "hostName"?: string;
  /**
   * The host ID.
   */
  "id"?: number;
  /**
   * If a host is muted or unmuted.
   */
  "isMuted"?: boolean;
  /**
   * Last time the host reported a metric data point.
   */
  "lastReportedTime"?: number;
  /**
   * Metadata associated with your host.
   */
  "meta"?: HostMeta;
  /**
   * Host Metrics collected.
   */
  "metrics"?: HostMetrics;
  /**
   * Timeout of the mute applied to your host.
   */
  "muteTimeout"?: number;
  /**
   * The host name.
   */
  "name"?: string;
  /**
   * Source or cloud provider associated with your host.
   */
  "sources"?: Array<string>;
  /**
   * List of tags for each source (AWS, Datadog Agent, Chef..).
   */
  "tagsBySource"?: { [key: string]: Array<string> };
  /**
   * Displays UP when the expected metrics are received and displays `???` if no metrics are received.
   */
  "up"?: boolean;

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
    aliases: {
      baseName: "aliases",
      type: "Array<string>",
    },
    apps: {
      baseName: "apps",
      type: "Array<string>",
    },
    awsName: {
      baseName: "aws_name",
      type: "string",
    },
    hostName: {
      baseName: "host_name",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    isMuted: {
      baseName: "is_muted",
      type: "boolean",
    },
    lastReportedTime: {
      baseName: "last_reported_time",
      type: "number",
      format: "int64",
    },
    meta: {
      baseName: "meta",
      type: "HostMeta",
    },
    metrics: {
      baseName: "metrics",
      type: "HostMetrics",
    },
    muteTimeout: {
      baseName: "mute_timeout",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
    },
    tagsBySource: {
      baseName: "tags_by_source",
      type: "{ [key: string]: Array<string>; }",
    },
    up: {
      baseName: "up",
      type: "boolean",
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
    return Host.attributeTypeMap;
  }

  public constructor() {}
}
