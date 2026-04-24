/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultNetpathDestination } from "./SyntheticsTestResultNetpathDestination";
import { SyntheticsTestResultNetpathEndpoint } from "./SyntheticsTestResultNetpathEndpoint";
import { SyntheticsTestResultNetpathHop } from "./SyntheticsTestResultNetpathHop";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Network Path test result capturing the path between source and destination.
 */
export class SyntheticsTestResultNetpath {
  /**
   * Destination endpoint of a network path measurement.
   */
  "destination"?: SyntheticsTestResultNetpathDestination;
  /**
   * Hops along the network path.
   */
  "hops"?: Array<SyntheticsTestResultNetpathHop>;
  /**
   * Origin of the network path (for example, probe source).
   */
  "origin"?: string;
  /**
   * Identifier of the path trace.
   */
  "pathtraceId"?: string;
  /**
   * Protocol used for the path trace (for example, `tcp`, `udp`, `icmp`).
   */
  "protocol"?: string;
  /**
   * Source endpoint of a network path measurement.
   */
  "source"?: SyntheticsTestResultNetpathEndpoint;
  /**
   * Tags associated with the network path measurement.
   */
  "tags"?: Array<string>;
  /**
   * Unix timestamp (ms) of the network path measurement.
   */
  "timestamp"?: number;

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
    destination: {
      baseName: "destination",
      type: "SyntheticsTestResultNetpathDestination",
    },
    hops: {
      baseName: "hops",
      type: "Array<SyntheticsTestResultNetpathHop>",
    },
    origin: {
      baseName: "origin",
      type: "string",
    },
    pathtraceId: {
      baseName: "pathtrace_id",
      type: "string",
    },
    protocol: {
      baseName: "protocol",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "SyntheticsTestResultNetpathEndpoint",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
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
    return SyntheticsTestResultNetpath.attributeTypeMap;
  }

  public constructor() {}
}
