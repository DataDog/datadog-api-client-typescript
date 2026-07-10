/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTypeSlugSource } from "./IncidentTypeSlugSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident-type-scoped behavior settings. All fields are optional on update. Any field omitted from a PATCH request keeps its current value. This object is read-only on the incident type resource itself and is only mutated through the update (PATCH) endpoint.
 */
export class IncidentTypeConfiguration {
  /**
   * Whether incidents of this type can be deleted.
   */
  "allowIncidentDeletion"?: boolean;
  /**
   * Whether automation workflows can be triggered for incidents of this type.
   */
  "allowWorkflows"?: boolean;
  /**
   * An optional message shown to users when they declare an incident of this type.
   */
  "createMessage"?: string;
  /**
   * Whether responders can edit incident timestamps for incidents of this type.
   */
  "editableTimestamps"?: boolean;
  /**
   * Whether responders can create private incidents of this type. This is an opt-in setting, distinct from `private_incidents_by_default`, which controls whether incidents are created private automatically.
   */
  "privateIncidents"?: boolean;
  /**
   * Whether incidents of this type are created as private by default.
   */
  "privateIncidentsByDefault"?: boolean;
  /**
   * When set to `servicenow`, incidents will display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID will be displayed.
   */
  "slugSource"?: IncidentTypeSlugSource;
  /**
   * Whether incidents of this type are treated as test incidents.
   */
  "testIncidents"?: boolean;

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
    allowIncidentDeletion: {
      baseName: "allow_incident_deletion",
      type: "boolean",
    },
    allowWorkflows: {
      baseName: "allow_workflows",
      type: "boolean",
    },
    createMessage: {
      baseName: "create_message",
      type: "string",
    },
    editableTimestamps: {
      baseName: "editable_timestamps",
      type: "boolean",
    },
    privateIncidents: {
      baseName: "private_incidents",
      type: "boolean",
    },
    privateIncidentsByDefault: {
      baseName: "private_incidents_by_default",
      type: "boolean",
    },
    slugSource: {
      baseName: "slug_source",
      type: "IncidentTypeSlugSource",
    },
    testIncidents: {
      baseName: "test_incidents",
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
    return IncidentTypeConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
