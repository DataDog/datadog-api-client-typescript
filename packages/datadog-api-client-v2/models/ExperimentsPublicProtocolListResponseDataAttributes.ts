/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPublicProtocolResponseDataAttributesStatus } from "./ExperimentsPublicProtocolResponseDataAttributesStatus";
import { ExperimentsPublicProtocolResponseDataAttributesSubjectType } from "./ExperimentsPublicProtocolResponseDataAttributesSubjectType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Summary of the protocol and its selected subject type and primary metric.
 */
export class ExperimentsPublicProtocolListResponseDataAttributes {
  /**
   * Text that explains the protocol.
   */
  "description"?: string;
  /**
   * Display name of the protocol.
   */
  "name": string;
  /**
   * Subject type selected by the protocol.
   */
  "primaryMetric"?: ExperimentsPublicProtocolResponseDataAttributesSubjectType;
  /**
   * ID of the primary metric supplied by the protocol.
   */
  "primaryMetricId"?: string;
  /**
   * Publication status of the protocol.
   */
  "status": ExperimentsPublicProtocolResponseDataAttributesStatus;
  /**
   * Subject type selected by the protocol.
   */
  "subjectType"?: ExperimentsPublicProtocolResponseDataAttributesSubjectType;
  /**
   * ID of the subject type used by this configuration.
   */
  "subjectTypeId"?: string;
  /**
   * RFC3339 update time. Preserve all fractional seconds when passing this value as expected_updated_at.
   */
  "updatedAt": string;

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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    primaryMetric: {
      baseName: "primary_metric",
      type: "ExperimentsPublicProtocolResponseDataAttributesSubjectType",
    },
    primaryMetricId: {
      baseName: "primary_metric_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "ExperimentsPublicProtocolResponseDataAttributesStatus",
      required: true,
    },
    subjectType: {
      baseName: "subject_type",
      type: "ExperimentsPublicProtocolResponseDataAttributesSubjectType",
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
      required: true,
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
    return ExperimentsPublicProtocolListResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
