/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceControlMitigationDefinition } from "./GovernanceControlMitigationDefinition";
import { GovernanceControlParameterDefinition } from "./GovernanceControlParameterDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a governance control.
 */
export class GovernanceControlAttributes {
  /**
   * The number of active detections for the control.
   */
  "activeDetectionsCount": number;
  /**
   * The value driver the control is grouped under, such as `security` or `cost`.
   */
  "category": string;
  /**
   * The time the control configuration was created.
   */
  "createdAt": Date;
  /**
   * The UUID of the user who created the control configuration.
   */
  "createdBy": string;
  /**
   * A human-readable description of what the control detects.
   */
  "description": string;
  /**
   * How often detections are evaluated for the control.
   */
  "detectionFrequency": string;
  /**
   * A free-form map of parameter names to their configured values.
   */
  "detectionParameters": { [key: string]: any };
  /**
   * The insight slugs associated with the control.
   */
  "insights": Array<string>;
  /**
   * The time of the most recent detection for the control. `null` when there are no detections.
   */
  "lastDetectionAt": Date | null;
  /**
   * The number of mitigated detections for the control.
   */
  "mitigatedDetectionsCount": number;
  /**
   * A free-form map of parameter names to their configured values.
   */
  "mitigationParameters": { [key: string]: any };
  /**
   * The configured mitigation type for the control. Empty when not configured.
   */
  "mitigationType": string;
  /**
   * The mitigations available for a control.
   */
  "mitigations": Array<GovernanceControlMitigationDefinition>;
  /**
   * Human-readable name of the control.
   */
  "name": string;
  /**
   * The priority of the control, such as `High`.
   */
  "priority": string;
  /**
   * The product the control belongs to.
   */
  "product": string;
  /**
   * The type of resource the control evaluates.
   */
  "resourceType": string;
  /**
   * The human-readable name of the resource type.
   */
  "resourceTypeDisplayName": string;
  /**
   * An array of parameter definitions.
   */
  "supportedDetectionParameters": Array<GovernanceControlParameterDefinition>;
  /**
   * The control type, such as `Proactive` or `Detection`.
   */
  "type": string;

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
    activeDetectionsCount: {
      baseName: "active_detections_count",
      type: "number",
      required: true,
      format: "int64",
    },
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    detectionFrequency: {
      baseName: "detection_frequency",
      type: "string",
      required: true,
    },
    detectionParameters: {
      baseName: "detection_parameters",
      type: "{ [key: string]: any; }",
      required: true,
    },
    insights: {
      baseName: "insights",
      type: "Array<string>",
      required: true,
    },
    lastDetectionAt: {
      baseName: "last_detection_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    mitigatedDetectionsCount: {
      baseName: "mitigated_detections_count",
      type: "number",
      required: true,
      format: "int64",
    },
    mitigationParameters: {
      baseName: "mitigation_parameters",
      type: "{ [key: string]: any; }",
      required: true,
    },
    mitigationType: {
      baseName: "mitigation_type",
      type: "string",
      required: true,
    },
    mitigations: {
      baseName: "mitigations",
      type: "Array<GovernanceControlMitigationDefinition>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    priority: {
      baseName: "priority",
      type: "string",
      required: true,
    },
    product: {
      baseName: "product",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
      required: true,
    },
    resourceTypeDisplayName: {
      baseName: "resource_type_display_name",
      type: "string",
      required: true,
    },
    supportedDetectionParameters: {
      baseName: "supported_detection_parameters",
      type: "Array<GovernanceControlParameterDefinition>",
      required: true,
    },
    type: {
      baseName: "type",
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
    return GovernanceControlAttributes.attributeTypeMap;
  }

  public constructor() {}
}
